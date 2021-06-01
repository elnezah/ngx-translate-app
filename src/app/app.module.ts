import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'ng2-file-upload';
import { FlexModule } from '@angular/flex-layout';
import { ComponentsModule } from './components/components.module';
import { MatInputModule } from '@angular/material/input';
import { FileSaverModule } from 'ngx-filesaver';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FileSaverModule,
    FileUploadModule,
    FlexModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [FileReader],
  bootstrap: [AppComponent]
})
export class AppModule {
}
