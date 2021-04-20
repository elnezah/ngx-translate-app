import { Component, OnInit } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';

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

  public constructor() {
  }

  public ngOnInit(): void {
    this.fileUploader.onAfterAddingFile = (fi: FileItem) => this.afterAddingFiles(fi);
  }

  // region Listeners
  public onFileHooverOnBase($event: any) {
    this.hasBaseDropZoneOver = $event;
  }

  public onFileDropOnBase($event: File[]) {
    console.log(AppComponent.TAG, {$event});
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
  }

  public onClickOnTranslationFile(translationFile: TranslationFile) {
    this.clickedFile = translationFile;
  }
}
