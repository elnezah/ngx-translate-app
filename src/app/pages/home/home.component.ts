import { Component, HostListener, OnInit } from "@angular/core";
import { FileItem, FileUploader } from "ng2-file-upload";
import { ObjectToolboxService } from "../../services/object-toolbox.service";
import { FileSaverService } from "ngx-filesaver";
import { MatDialog } from "@angular/material/dialog";
import {
  AlertComponent,
  DataObject,
} from "../../components/dialog/alert/alert.component";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import {
  TranslationObject,
  ObjectBranch,
} from "src/app/components/objects-tree-merger/objects-tree-merger.component";

export interface TranslationFile {
  fileName: string;
  languageCode: string;
  content: any;
  leaveCount: number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  private static readonly TAG = "HomeComponent";

  public hasBaseDropZoneOver: boolean;
  public fileUploader = new FileUploader({});
  public translationFiles: TranslationFile[] = [];
  public clickedFile: TranslationFile;
  public totalLeaves: number;
  public hasUnsavedChanges = false;
  public showOnlyIncomplete = false;

  public translationObjects: TranslationObject[];
  public objectTree: ObjectBranch[];
  public branchOnEdit: ObjectBranch;

  public get loadedLanguages(): string[] {
    return this.translationFiles?.map((e) => e.languageCode);
  }

  public constructor(
    private dialog: MatDialog,
    private fileSaver: FileSaverService,
    private ot: ObjectToolboxService
  ) {}

  public ngOnInit(): void {
    this.fileUploader.onAfterAddingFile = (fi: FileItem) =>
      this.afterAddingFiles(fi);
  }

  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    if (this.hasUnsavedChanges) {
      $event.returnValue = !this.hasUnsavedChanges;
    }
  }

  //region Listeners
  public onFileHooverOnBase($event: any) {
    this.hasBaseDropZoneOver = $event;
  }

  public onFileDropOnBase($event: File[]) {
    // console.log(AppComponent.TAG, {$event});
  }

  private async afterAddingFiles(fi: FileItem): Promise<void> {
    const fn = fi.file.name;
    const regexRes = /^([a-zA-Z]{2})\.(json)$/.exec(fn);

    // TODO: Put here an alert if the file has an invalid name

    if (regexRes && regexRes.length > 0) {
      const fileName = regexRes[1];
      const fileExtension = regexRes[2];

      if (fileExtension === "json") {
        const content = await this.readFileAsText(fi._file);
        const c = JSON.parse(content);
        if (
          // If language exists, ask user before overwriting
          this.translationFiles &&
          this.translationFiles.some((t) => t.languageCode === fileName)
        ) {
          let data: DataObject = {
            header: "Duplicated language",
            message:
              'There is already content for this language. Do you want to overwrite current content for "' +
              fileName +
              '"?',
            buttons: [
              { text: "Yes", role: "ok" },
              { text: "No", role: "cancel" },
            ],
          };
          const d = this.dialog.open(AlertComponent, { data });
          const r = await d.afterClosed().toPromise();

          if (r.role === "ok") {
            this.loadLanguage({
              fileName: fileName + "." + fileExtension,
              languageCode: fileName,
              content: c,
              leaveCount: this.ot.countNonEmptyLeaves(c),
            });
          } else {
            data = {
              header: fileName,
              message: "Your file was NOT loaded",
              buttons: [{ role: "ok", text: "Ok" }],
            };
            this.dialog.open(AlertComponent, { data });
          }
        } else {
          this.loadLanguage({
            fileName: fileName + "." + fileExtension,
            languageCode: fileName,
            content: c,
            leaveCount: this.ot.countNonEmptyLeaves(c),
          });
        }
      }

      this.translationObjects = this.translationFiles.map((tf) => ({
        filename: tf.fileName,
        content: tf.content,
      }));
    }
  }

  public onClickOnTranslationFile(translationFile: TranslationFile) {
    this.clickedFile = translationFile;
  }

  public onFieldChange($event: Event, languageCode: string): void {
    this.hasUnsavedChanges = true;
    const translationOnEdit = this.branchOnEdit.translations.find(
      (e) => e.language === languageCode
    );
    if (translationOnEdit) translationOnEdit.value = $event.target["value"];
    else {
      this.branchOnEdit.translations.push({
        language: languageCode,
        value: $event.target["value"],
      });
    }
  }

  public onClickOnSave(): void {
    if (!this.objectTree) return;
    const languages = this.objectTree.reduce<string[]>((a, b) => {
      if (b.translations)
        for (const t of b.translations) {
          if (!a.includes(t.language)) a.push(t.language);
        }

      return a;
    }, []);

    if (languages && languages.length > 0) {
      for (const l of languages) {
        const translationJson = {} as Object;
        for (const e of this.objectTree) {
          this.ot.setValueForObjectPath(
            e.translations
              ? e.translations.find((t) => t.language === l)?.value
              : ({} as Object),
            translationJson,
            e.path
          );
        }

        const blob = JSON.stringify(translationJson, null, 3);
        this.fileSaver.saveText(blob, l + ".json");

        console.log(HomeComponent.TAG, { l, translationJson });
      }

      this.hasUnsavedChanges = false;
    }
  }

  public async onClickOnAddField(): Promise<void> {
    const data = {
      header: "Enter a name",
      message: "Please enter a name for the new node",
      buttons: [
        {
          text: "Save",
          role: "save",
        },
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
      inputs: [
        {
          id: "keyName",
          tag: "Name the new text",
          placeholder: "Ex.: input_tag_email",
          value: "",
        }
      ],
    };
    const d = this.dialog.open(AlertComponent, { data });
    const r = await d.afterClosed().toPromise();

    if (r.role === "save") {
      try {
        const newKey = r.data.inputs[0].value.trim();
        if (!newKey) {
          throw new Error("empty name given for new key");
        }

        // Add a sibling if branchOnEdit is leaf, a child otherwise
        const path = [...this.branchOnEdit.path];
        if (this.branchOnEdit.translations) path.pop();
        this.objectTree.push({ path: [path, newKey], translations: [] });

        this.sortObjectTree();
      } catch (e) {
        console.error(HomeComponent.TAG, "error adding new branch", e);
        this.dialog.open(AlertComponent, {
          data: {
            header: "Error",
            message:
              "Something went wrong creating the new node. Did you enter a valid name? (Key names must not be empty must all be different in the same level.)",
            buttons: [{ text: "Close", role: "close" }],
          },
        });
      }
    }
  }

  public onShowIncompleteChange($event: MatSlideToggleChange) {
    this.showOnlyIncomplete = $event.checked;
  }

  public onClickOnBranch(b: ObjectBranch): void {
    this.branchOnEdit = b;
  }

  //endregion

  private readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result as string);
      fr.onerror = reject;
      fr.readAsText(file);
    });
  }

  /**
   * Loads the entries of a given TranslationFile into this.objectTree. Overwrite possible existing entries in objectTree
   * @param translationFile
   */
  private loadLanguage(translationFile: TranslationFile) {
    const mIndex = this.translationFiles.findIndex(
      (e) => e.languageCode === translationFile.languageCode
    );
    if (mIndex >= 0) {
      this.translationFiles[mIndex] = translationFile;
    } else {
      this.translationFiles.push(translationFile);
    }

    this.refreshEntriesTree();
  }
  public languageCode2FlagFilename(code: string): string {
    return code.toUpperCase() + ".png";
  }

  private refreshEntriesTree(): void {
    if (!this.objectTree) this.objectTree = [];

    for (const tf of this.translationFiles) {
      this.addLanguageEntries(tf.languageCode, tf.content, []);
    }
    this.sortObjectTree();

    this.totalLeaves = this.objectTree.filter((b) => b.translations).length;
  }

  private sortObjectTree() {
    this.objectTree.sort((a1, a2) => {
      const p1 = a1.path.join(".");
      const p2 = a2.path.join(".");
      return p1.localeCompare(p2);
    });
  }

  /**
   * Adds the content of a given object to this.objectTree in the corresponding language. If some entry of the given object and language already exists, overwrites it.
   * @param language the language to which the entries should be assigned
   * @param content the contents to be added
   * @param currentPath the base path on which to start in this.objectTree. This is not supposed to be used, this parameter is there because the function is recursive. Default is []
   */
  private addLanguageEntries(
    language: string,
    content: Object,
    currentPath: string[] = []
  ): void {
    const keys = Object.keys(content);

    for (const k of keys) {
      const childPath = [...currentPath, k];
      const isLeaf = typeof content[k] === "string";
      const branch = this.getBranchForPath(childPath);

      if (isLeaf) {
        if (!branch.translations) branch.translations = [];
        const translation = branch.translations.find(
          (t) => t.language === language
        );
        if (!translation) {
          branch.translations.push({
            language: language,
            value: content[k],
          });
        } else {
          translation.value = content[k];
        }
      } else {
        this.addLanguageEntries(language, content[k], childPath);
      }
    }
  }

  /**
   * Finds the element in the objectTree that corresponds the given path. If it does not exist, creates it (with property 'translations' set to null) and adds it to the array
   * @param p
   * @returns
   */
  private getBranchForPath(p: string[]): ObjectBranch {
    // Find the branch in the objectTree for which every element in the path is the same as the given path
    let branch = this.objectTree.find((b) => {
      return p.every((e, i) => {
        return e === b.path[i];
      });
    });

    // If branch does not exist, create it
    if (!branch) {
      branch = {
        path: [...p],
        translations: null,
      } as ObjectBranch;
      this.objectTree.push(branch);
    }

    return branch;
  }

  public translationOnEdit(languageCode: string): string {
    const res = this.branchOnEdit.translations.find(
      (e) => e.language === languageCode
    )?.value;

    return res ? res : null;
  }
}
