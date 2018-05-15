import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionsService } from '../../../core/services/questions.service'
import { questions } from '../../../core/models/questions.model'

@Component({
  selector: 'uniKnowledge-askQuestion-dialog-my',
  templateUrl: 'askQuestionDialog.component.html',
})
export class AskQuestionDialogComponent {
  question1: questions = new questions();
  quesion1From: FormGroup;
  errors: Object= {};

  constructor(
    public dialogRef: MatDialogRef<AskQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
