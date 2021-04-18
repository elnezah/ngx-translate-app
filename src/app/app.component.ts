import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly TAG = 'AppComponent';

  public myTestObject = {object: 'Test Object', message: 'Test message'};
}
