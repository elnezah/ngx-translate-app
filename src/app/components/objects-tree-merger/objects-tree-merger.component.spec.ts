import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsTreeMergerComponent } from './objects-tree-merger.component';

describe('ObjectsTreeMergerComponent', () => {
  let component: ObjectsTreeMergerComponent;
  let fixture: ComponentFixture<ObjectsTreeMergerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsTreeMergerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsTreeMergerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
