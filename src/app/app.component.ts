import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private static readonly TAG = "AppComponent";

  public constructor() {}

  public ngOnInit(): void {

  }
}
