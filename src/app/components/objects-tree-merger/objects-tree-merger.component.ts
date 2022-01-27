import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";

export interface ObjectBranch {
  path: string[];
  translations: {
    language: string;
    value: string;
  }[];
}

export interface TranslationObject {
  filename: string;
  content: Object;
}

@Component({
  selector: "app-objects-tree-merger",
  templateUrl: "./objects-tree-merger.component.html",
  styleUrls: ["./objects-tree-merger.component.scss"],
})
export class ObjectsTreeMergerComponent implements OnInit {
  private static readonly TAG = "ObjectsTreeMergerComponent";

  @Input() selectedPath: string[] = [];
  @Input() objectTree: ObjectBranch[];

  @Output() clickOnElement = new EventEmitter<ObjectBranch>();

  public constructor() {}

  public ngOnInit(): void {}

  //region Listeners
  public onClickOnElement(b: ObjectBranch): void {
    this.clickOnElement.emit(b);
  }
  //endregion

  public isSelectedBranch(b: ObjectBranch): boolean {
    return b.path.length === this.selectedPath?.length && b.path.every((e, i) => e === this.selectedPath[i]);
  }
}
