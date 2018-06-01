import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'uniKnowledge-show-answers-dialog',
  templateUrl: 'showAnswersDialog.component.html',
})
export class ShowAnswersDialogComponent implements OnInit{
  question: Question = new Question();
  errors: Object = {};
  description;
  title;
  domains;
  selectedDomain;
  answer;
  answers;
  isDataLoaded;

  constructor(
    public dialogRef: MatDialogRef<ShowAnswersDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private questionsService: QuestionsService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.domains = ['Biology', 'Chemistry', 'Math', 'Computer Science', 'Philosophy', 'Economy', 'Psychology', 'Medicine', 'Litterature'];
    this.isDataLoaded = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  
    // Get answers from DB
    this.questionsService.getAnswers(this.data.questionID)
    .subscribe(
      data => {
          this.answers = data;
          console.log(this.answers);
          this.isDataLoaded = true;
        },
      err => {
          console.log(err);
        }
  );
  }  
}
