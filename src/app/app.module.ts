import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'ng2-file-upload';
import { FlexModule } from '@angular/flex-layout';
import { ComponentsModule } from './components/components.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FileUploadModule,
    FlexModule,
    MatInputModule
  ],
  providers: [FileReader],
  bootstrap: [AppComponent]
})
export class AppModule {
}
