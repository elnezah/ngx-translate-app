import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recursive-json',
  templateUrl: './recursive-json.component.html',
  styleUrls: ['./recursive-json.component.scss']
})
export class RecursiveJsonComponent implements OnInit, OnChanges {
  private static readonly TAG = 'RecursiveJsonComponent';

  @Input() jsonObject;
  @Input() level = 0;

  public keys: string[];

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.keys = Object.keys(this.jsonObject);
  }

  public isLeaf(o: any): boolean {
    return typeof o !== 'object';
  }

}
