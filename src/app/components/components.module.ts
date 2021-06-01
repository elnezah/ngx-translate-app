import { NgModule } from '@angular/core';
import { RecursiveJsonComponent } from './recursive-json/recursive-json.component';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './dialog/alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
      RecursiveJsonComponent,
      AlertComponent
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
      RecursiveJsonComponent
    ]
  }
)
export class ComponentsModule {
}
