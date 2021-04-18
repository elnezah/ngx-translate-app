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
  public fileUploader = new FileUploader({ });

  public files: TranslationFile[];

  constructor(private fileReader: FileReader) {
  }

  public ngOnInit(): void {
    this.fileReader.onload = (ev: any) => {
      try {
        const mObject = JSON.parse(ev.target.result);
        console.log(AppComponent.TAG, mObject);
      } catch (e) {
        console.warn(AppComponent.TAG, 'error trying to read file', e);
      }
    };

    this.fileUploader.onAfterAddingFile = (fi: FileItem) => {
      console.log(AppComponent.TAG, {fi});

      const fn = fi.file.name;
      const regexRes = /^([a-zA-Z]{2})\.(json)$/.exec(fn);

      if (regexRes && regexRes.length > 0) {
        const fileName = regexRes[1];
        const extension = regexRes[2];
        this.fileReader.readAsText(fi._file);
      }
    };
  }

  // region Listeners
  public onFileHooverOnBase($event: any) {
    this.hasBaseDropZoneOver = $event;
  }

  public onFileDropOnBase($event: File[]) {
    console.log(AppComponent.TAG, {$event});
  }

  // endregion
}
