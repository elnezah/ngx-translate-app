import { Component, HostListener, OnInit } from "@angular/core";
import { FileItem, FileUploader } from "ng2-file-upload";
import { ObjectToolboxService } from "../../services/object-toolbox.service";
import { FileSaverService } from "ngx-filesaver";
import { MatDialog } from "@angular/material/dialog";
import {
  AlertComponent,
  DataObject,
} from "../../components/dialog/alert/alert.component";

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
      this.ot.mergeStructureIntoTarget(tf.content, this.keyTree);
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
}
