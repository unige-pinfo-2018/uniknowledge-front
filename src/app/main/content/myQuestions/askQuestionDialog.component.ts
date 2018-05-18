import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionsService } from '../../../core/services/questions.service'
import { questions } from '../../../core/models/index'

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
    @Inject(MAT_DIALOG_DATA)
    @Inject(questions)
    public data: any,
    private questionsService: QuestionsService,
    private fb: FormBuilder
   ) 
    {
      //use the fb formbuilder to create a group
      this.quesion1From = this.fb.group({
        title: '',
        body: '',
      });
      //
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  //nothing for now
  }

  submitForm() {
    //post the question
    this.questionsService.save(this.question1)
    console.log(this.question1)
    err => {
      this.errors = err;
    }
  }


}
