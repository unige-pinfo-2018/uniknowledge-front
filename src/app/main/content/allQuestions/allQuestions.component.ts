import { Component, OnInit } from '@angular/core';
import { UniKnowledgeTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { UniKnowledgeSearchBarComponent } from '../../../core/components/search-bar/search-bar.component';
import { AskQuestionDialogComponent } from '../myQuestions/askQuestionDialog.component';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';
import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/models';

@Component({
    selector   : 'uniKnowledge-allQuestions',
    templateUrl: './allQuestions.component.html',
    styleUrls  : ['./allQuestions.component.scss']
})
export class UniKnowledgeAllQuestionsComponent implements OnInit
{
    constructor(private translationLoader: UniKnowledgeTranslationLoaderService, private dialog: MatDialog, private questionService: QuestionsService)
    {
        this.translationLoader.loadTranslations(english, french);
    }

    questions: Question[];
    askDialogRef: MatDialogRef<AskQuestionDialogComponent>;
    
    ngOnInit(): void {
        this.getAllQuestions();
    }
    
    openAskQuestion() {
      this.askDialogRef = this.dialog.open(AskQuestionDialogComponent, {
        height: '500px',
        width: '600px',
      });
    }

    getAllQuestions() {
        this.questionService
        .get('top/?nb=3')
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
