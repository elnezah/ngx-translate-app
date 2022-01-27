import { NgModule } from '@angular/core';
import { RecursiveJsonComponent } from './recursive-json/recursive-json.component';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './dialog/alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ObjectsTreeMergerComponent } from './objects-tree-merger/objects-tree-merger.component';

@NgModule({
    declarations: [
      RecursiveJsonComponent,
      AlertComponent,
      ObjectsTreeMergerComponent
    ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule
  ],
    exports: [
      RecursiveJsonComponent,
      ObjectsTreeMergerComponent
    ]
  }
)
export class ComponentsModule {
}
