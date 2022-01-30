import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DataObject {
  header?: string;
  message?: string;
  buttons?: { text?: string; role: string; }[];
  inputs?: { id: string; tag?: string; placeholder?: string; value?: string }[];
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  private static readonly TAG = 'AlertComponent';

  public header: string;
  public message: string;
  public buttons: { text?: string; role: string }[];
  public inputs: { id: string; tag?: string; placeholder?: string; value?: string }[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: DataObject,
              private dialogRef: MatDialogRef<AlertComponent>) {
  }

  public ngOnInit(): void {
    this.header = this.data.header;
    this.message = this.data.message;
    this.buttons = this.data.buttons;
    this.inputs = this.data.inputs;
  }

  public onClickOnButton(button: { text?: string; role: string }): void {
    this.dialogRef.close({
      data: {inputs: this.inputs},
      role: button.role
    });
  }

  public onInputChange($event: Event, input: { id: string; tag?: string; placeholder?: string; value?: string; }): void {
    input.value = $event.target[`value`];
  }
}
