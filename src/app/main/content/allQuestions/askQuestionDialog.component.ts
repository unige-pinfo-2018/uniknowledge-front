import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'uniKnowledge-askQuestion-dialog',
  templateUrl: 'askQuestionDialog.component.html',
})
export class AskQuestionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AskQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
