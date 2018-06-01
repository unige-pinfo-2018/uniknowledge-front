import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'uniKnowledge-askQuestion-dialog-my',
  templateUrl: 'askQuestionDialog.component.html',
})
export class AskQuestionDialogComponent {
  question: Question = new Question();
  errors: Object = {};
  description;
  title;
  domains;
  selectedDomain;

  constructor(
    public dialogRef: MatDialogRef<AskQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private questionsService: QuestionsService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.domains = ['Biology', 'Chemistry', 'Math', 'Computer Science', 'Philosophy', 'Economy', 'Psychology', 'Medicine', 'Litterature'];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm() {

    // Init Question Properties
    this.question.title = this.title;
    this.question.text = this.description;
    this.question.domain = this.selectedDomain;

    // Push Question to Database
    this.questionsService.save(this.question)
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
