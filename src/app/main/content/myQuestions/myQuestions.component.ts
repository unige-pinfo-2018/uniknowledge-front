import { Component, OnInit } from '@angular/core';
import { UniKnowledgeTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { UniKnowledgeSearchBarComponent } from '../../../core/components/search-bar/search-bar.component';
import { AskQuestionDialogComponent } from './askQuestionDialog.component';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';

import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/models';

@Component({
    selector   : 'uniKnowledge-myQuestions',
    templateUrl: './myQuestions.component.html',
    styleUrls  : ['./myQuestions.component.scss']
})
export class UniKnowledgeMyQuestionsComponent implements OnInit
{
    constructor(private translationLoader: UniKnowledgeTranslationLoaderService, private dialog: MatDialog, private questionService: QuestionsService)
    {
        this.translationLoader.loadTranslations(english, french);
    }

    questions: Question[];
    askDialogRef: MatDialogRef<AskQuestionDialogComponent>;
  
    ngOnInit(): void {
        this.getMyQuestions();
    }
    openAskQuestion() {
      this.askDialogRef = this.dialog.open(AskQuestionDialogComponent, {
        height: '500px',
        width: '600px',
      });
    }

    getMyQuestions() {
        this.questionService
        .get('me')
        .subscribe(
            data => {
                console.log(data);
                this.questions = data;
            },
            err => {
                console.log(err);
            }
        );
    }
}
