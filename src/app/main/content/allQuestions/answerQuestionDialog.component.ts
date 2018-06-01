import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'uniKnowledge-answerQuestion-dialog',
  templateUrl: 'answerQuestionDialog.component.html',
})
export class AnswerQuestionDialogComponent implements OnInit{
  question: Question = new Question();
  errors: Object = {};
  description;
  title;
  domains;
  selectedDomain;
  answer;

  constructor(
    public dialogRef: MatDialogRef<AnswerQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private questionsService: QuestionsService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.domains = ['Biology', 'Chemistry', 'Math', 'Computer Science', 'Philosophy', 'Economy', 'Psychology', 'Medicine', 'Litterature'];
    this.answer = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  submitForm() {

    // Push Question to Database
    this.questionsService.saveAnswer(this.description, this.data.questionID)
    .subscribe(
      data => {
          console.log(data);
          this.dialogRef.close();
          window.location.reload();
        },
      err => {
          console.log(err);
          this.dialogRef.close();
          window.location.reload();
        }
  );
  }


}
