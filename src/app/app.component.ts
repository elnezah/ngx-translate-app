import { Component, OnInit } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { ObjectToolboxService } from './services/object-toolbox.service';
import { FileSaverService } from 'ngx-filesaver';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from './components/dialog/alert/alert.component';

interface TranslationFile {
  fileName: string;
  languageCode: string;
  content: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private static readonly TAG = 'AppComponent';

  public hasBaseDropZoneOver: boolean;
  public fileUploader = new FileUploader({});
  public translationFiles: TranslationFile[] = [];
  public clickedFile: TranslationFile;
  public pathOnEdit: string[];
  public keyTree: any;
  public isLeafSelected: boolean;

  public constructor(private dialog: MatDialog,
                     private fileSaver: FileSaverService,
                     private ot: ObjectToolboxService) {
  }

  public ngOnInit(): void {
    this.fileUploader.onAfterAddingFile = (fi: FileItem) => this.afterAddingFiles(fi);
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

      if (fileExtension === 'json') {
        const content = await this.readFileAsText(fi._file);
        if (this.translationFiles && this.translationFiles.some(t => t.languageCode === fileName)) {
          if (confirm('There is already content for this language. Do you want to overwrite current content for "' + fileName + '"?')) {
            this.loadLanguage({
              fileName: fileName + '.' + fileExtension,
              languageCode: fileName,
              content: JSON.parse(content)
            });
          } else {
            alert('Your file was NOT loaded');
          }
        } else {
          this.loadLanguage({
            fileName: fileName + '.' + fileExtension,
            languageCode: fileName,
            content: JSON.parse(content)
          });
        }

      }
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
    this.ot.setValueForObjectPath(
      ($event.target as HTMLInputElement).value,
      translationFile.content,
      this.pathOnEdit);
  }

  public onClickOnSave(): void {
    if (this.translationFiles) {
      for (const tf of this.translationFiles) {

        const blob = JSON.stringify(tf.content, null, 3);
        this.fileSaver.saveText(blob, tf.fileName);
      }
    }
  }

  public async onClickOnAddField(): Promise<void> {
    const data = {
      header: 'Enter a name',
      message: 'Please enter a name for the new node',
      buttons: [
        {
          text: 'Save',
          role: 'save'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ],
      inputs: [
        {id: 'keyName', tag: 'Name the new text', placeholder: 'Ex.: input_tag_email', value: ''}
      ]
    };
    const d = this.dialog.open(AlertComponent, {data});
    const r = await d.afterClosed().toPromise();
    const newKey = r.data.inputs[0].value;
    console.log(AppComponent.TAG, 'onClickOnAddField afterClosed', {r, newKey});
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
    const mIndex = this.translationFiles.findIndex(e => e.languageCode === translationFile.languageCode);
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
    return this.ot.getValueForObjectPath(translationFile.content, this.pathOnEdit);
  }

  public languageCode2FlagFilename(code: string): string {
    return code.toUpperCase() + '.png';
  }
}
