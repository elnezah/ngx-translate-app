import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TranslationFile } from 'src/app/pages/home/home.component';
import { ObjectToolboxService } from '../../services/object-toolbox.service';

@Component({
  selector: 'app-recursive-json',
  templateUrl: './recursive-json.component.html',
  styleUrls: ['./recursive-json.component.scss']
})
export class RecursiveJsonComponent implements OnInit, OnChanges {
  private static readonly TAG = 'RecursiveJsonComponent';

  @Input() jsonObject;
  @Input() ownPath: string[] = [];
  @Input() showValues = true;
  @Input() translationsFiles: TranslationFile[];
  @Input() showOnlyIncomplete = false;
  @Output() clickOnElement = new EventEmitter<string[]>();

  public keys: string[];
  public level = 0;

  public constructor(private ot: ObjectToolboxService) {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.jsonObject) {
      this.keys = Object.keys(this.jsonObject);
    }
    this.level = this.ownPath.length;
  }

  public onClickOnElement(key: string) {
    this.clickOnElement.emit([...this.ownPath, key]);
  }

  public isLeaf(o: any): boolean {
    return this.ot.isLeaf(o);
  }

  public pathForChild(key: string): string[] {
    return [...this.ownPath, key];
  }

  public onClickOnChild($event: string[]) {
    this.clickOnElement.emit($event);
  }

  public isNodeTranslationComplete(key: string): boolean {
    if (this.translationsFiles) {
      for (const tf of this.translationsFiles) {
        const v = this.ot.getValueForObjectPath(tf.content, [...this.ownPath, key]);
        if (!v) {
          return false;
        }
      }
    }

    return true;
  }
}
