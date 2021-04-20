import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recursive-json',
  templateUrl: './recursive-json.component.html',
  styleUrls: ['./recursive-json.component.scss']
})
export class RecursiveJsonComponent implements OnInit, OnChanges {
  private static readonly TAG = 'RecursiveJsonComponent';

  @Input() jsonObject;
  @Input() ownPath: string[] = [];
  @Output() clickOnElement = new EventEmitter<string[]>();

  public keys: string[];
  public level = 0;

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.keys = Object.keys(this.jsonObject);
    this.level = this.ownPath.length;
  }

  public onClickOnElement(key: string) {
    this.clickOnElement.emit([...this.ownPath, key]);
  }

  public isLeaf(o: any): boolean {
    return typeof o !== 'object';
  }

  public pathForChild(key: string): string[] {
    return [...this.ownPath, key];
  }

  public onClickOnChild($event: string[]) {
    this.clickOnElement.emit($event);
  }
}
