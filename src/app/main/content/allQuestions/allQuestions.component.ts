import { Component, OnInit } from '@angular/core';
import { UniKnowledgeTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { UniKnowledgeSearchBarComponent } from '../../../core/components/search-bar/search-bar.component';
import { AskQuestionDialogComponent } from '../myQuestions/askQuestionDialog.component';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';
import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/models';
import { UserService } from '../../../core/services/user.service';
import { SearchService } from '../../../core/services/search.service';

import { Observable } from 'rxjs/Observable';
@Component({
    selector   : 'uniKnowledge-allQuestions',
    templateUrl: './allQuestions.component.html',
    styleUrls  : ['./allQuestions.component.scss']
})
export class UniKnowledgeAllQuestionsComponent implements OnInit
{
    constructor(
        private translationLoader: UniKnowledgeTranslationLoaderService, 
        private dialog: MatDialog, 
        private questionService: QuestionsService,
        private userService: UserService,
        private searchService: SearchService
    )
    {
        this.translationLoader.loadTranslations(english, french);
        this.action = this.getUrlParameter('action');
    }

    action;
    currentUserId;
    questions: Question[];
    askDialogRef: MatDialogRef<AskQuestionDialogComponent>;
    
    ngOnInit(): void {
        this.getAllQuestions('');
    }
    
    openAskQuestion() {
      this.askDialogRef = this.dialog.open(AskQuestionDialogComponent, {
        height: '500px',
        width: '600px',
      });
    }

    getAllQuestions() {

    if (this.action === 'search') {

        this.searchService
        .search(this.getUrlParameter('text'))
        .subscribe(
            data => {
                console.log(data);
                this.questions = data;
            },
            err => {
                console.log(err);
            }
        );        

        } else {
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

    isMyQuestion(authorId): boolean {
    
        return 1 === authorId;
    }

    likeQuestion(id) {
        console.log(id);
        this.questionService.like(id)
        .subscribe(
            data => {
                console.log(data);
                window.location.reload();
            },
            err => {
                console.log(err);
                alert('Unfortunately it is impossible to like your own question once or one question multiple times !');
            }
        );
    }
    
    getUrlParameter(param) {
        return decodeURIComponent(window.location.search.substring(1)).split('&')
         .map((v) => { return v.split("=") })
         .filter((v) => { return (v[0] === param) ? true : false })
         .reduce((prev, curv, index, array) => { return curv[1]; }, undefined); 
      };
    
}
