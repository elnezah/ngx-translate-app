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
  public pathOnEdit: string[];
  public keyTree: any;
  public isLeafSelected: boolean;
  public totalLeaves: number;
  public hasUnsavedChanges = false;
  public showOnlyIncomplete = false;

  public translationObjects: TranslationObject[];
  public objectTree: ObjectBranch[];
  public selectedPath: string[];

  constructor(
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

  // region Listeners
  public onFileHooverOnBase($event: any) {
    this.hasBaseDropZoneOver = $event;
  }

  public onFileDropOnBase($event: File[]) {
    // console.log(AppComponent.TAG, {$event});
  }

  private async afterAddingFiles(fi: FileItem): Promise<void> {
    const fn = fi.file.name;
    const regexRes = /^([a-zA-Z]{2})\.(json)$/.exec(fn);

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
      this.totalLeaves = this.ot.countLeaves(this.keyTree);
    }
  }

  public onClickOnTranslationFile(translationFile: TranslationFile) {
    this.clickedFile = translationFile;
  }

  public onClickOnTreeElement($event: string[]): void {
    const target = this.ot.getValueForObjectPath(this.keyTree, $event);
    this.isLeafSelected = this.ot.isLeaf(target);
    this.pathOnEdit = $event;
  }

  public onFieldChange($event: Event, translationFile: TranslationFile): void {
    this.hasUnsavedChanges = true;

    this.ot.setValueForObjectPath(
      ($event.target as HTMLInputElement).value,
      translationFile.content,
      this.pathOnEdit
    );
    translationFile.leaveCount = this.ot.countNonEmptyLeaves(
      translationFile.content
    );
  }

  public onClickOnSave(): void {
    if (this.translationFiles) {
      for (const tf of this.translationFiles) {
        const blob = JSON.stringify(tf.content, null, 3);
        this.fileSaver.saveText(blob, tf.fileName);
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
        },
      ],
    };
    const d = this.dialog.open(AlertComponent, { data });
    const r = await d.afterClosed().toPromise();

    if (r.role === "save") {
      try {
        const newKey = r.data.inputs[0].value.trim();
        if (!newKey || newKey.length === 0) {
          throw new Error("empty name given for new key");
        }

        // Create a new son or sibling in this.keyTree
        const path = [...this.pathOnEdit];
        let target = this.ot.getValueForObjectPath(this.keyTree, path);
        if (this.ot.isLeaf(target)) {
          path.pop();
          target = this.ot.getValueForObjectPath(this.keyTree, path);
        }
        if (target[newKey] !== undefined) {
          throw new Error("trying to create a key that exists already");
        }
        target[newKey] = null;
      } catch (e) {
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

    this.totalLeaves = this.ot.countLeaves(this.keyTree);
  }

  public onShowIncompleteChange($event: MatSlideToggleChange) {
    this.showOnlyIncomplete = $event.checked;
  }

  public onClickOnBranch(b: ObjectBranch): void {
    this.pathOnEdit = [...b.path];
  }

  // endregion

  private readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result as string);
      fr.onerror = reject;
      fr.readAsText(file);
    });
  }

  private loadLanguage(translationFile: TranslationFile) {
    const mIndex = this.translationFiles.findIndex(
      (e) => e.languageCode === translationFile.languageCode
    );
    if (mIndex >= 0) {
      this.translationFiles[mIndex] = translationFile;
    } else {
      this.translationFiles.push(translationFile);
    }
    if (!this.keyTree) {
      this.keyTree = {};
    }
    for (const tf of this.translationFiles) {
      // this.ot.mergeStructureIntoTarget(tf.content, this.keyTree);
      this.refreshEntriesTree();
    }
  }

  public getValueOnEdit(translationFile: TranslationFile): string {
    return this.ot.getValueForObjectPath(
      translationFile.content,
      this.pathOnEdit
    );
  }

  public languageCode2FlagFilename(code: string): string {
    return code.toUpperCase() + ".png";
  }

  private refreshEntriesTree(): void {
    if (!this.objectTree) this.objectTree = [];

    for (const tf of this.translationFiles) {
      this.addLanguageEntries(tf.languageCode, tf.content, []);
    }
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
}
