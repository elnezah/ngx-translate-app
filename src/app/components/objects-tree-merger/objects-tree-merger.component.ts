import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

export interface ObjectBranch {
  path: string[];
  isComplete?: boolean;
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
export class ObjectsTreeMergerComponent implements OnInit, OnChanges {
  private static readonly TAG = "ObjectsTreeMergerComponent";

  private static count = { sum: 0, totalTime: 0 };

  @Input() selectedPath: string[] = [];
  @Input() objectTree: ObjectBranch[];
  @Input() loadedLanguages: string[];
  @Input() hideComplete = false;

  @Output() clickOnElement = new EventEmitter<ObjectBranch>();

  public constructor() {}

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
  }

  //region Listeners
  public onClickOnElement(b: ObjectBranch): void {
    this.clickOnElement.emit(b);
  }
  //endregion

  public isSelectedBranch(b: ObjectBranch): boolean {
    return (
      b.path.length === this.selectedPath?.length &&
      b.path.every((e, i) => e === this.selectedPath[i])
    );
  }

  public isCompleteBranch(b: ObjectBranch): boolean {
    // If it is a leaf, check it has every language
    if (b.translations) {
      return this.loadedLanguages?.every((e) =>
        b?.translations?.some((be) => be.language === e)
      );
    }

    // If it is not leaf, check that every child is complete
    const children = this.objectTree.filter((ote) =>
      b.path.every(
        (pe, i) => ote.path.length > b.path.length && ote.path[i] === pe
      )
    );

    const res =
      children &&
      children.reduce((a, e) => a && this.isCompleteBranch(e), true);
    return res;
  }
}
