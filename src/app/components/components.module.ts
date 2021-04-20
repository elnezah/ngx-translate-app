import { NgModule } from '@angular/core';
import { RecursiveJsonComponent } from './recursive-json/recursive-json.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      RecursiveJsonComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
      RecursiveJsonComponent
    ]
  }
)
export class ComponentsModule {
}
