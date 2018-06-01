import { Component, OnInit } from '@angular/core';
import { UniKnowledgeTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { UniKnowledgeSearchBarComponent } from '../../../core/components/search-bar/search-bar.component';
import { AnswerQuestionDialogComponent } from '../allQuestions/answerQuestionDialog.component';
import { AskQuestionDialogComponent } from '../myQuestions/askQuestionDialog.component';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';
import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';
import { QuestionsService } from '../../../core/services/questions.service';
import { Question } from '../../../core/models';
import { UserService } from '../../../core/services/user.service';
import { SearchService } from '../../../core/services/search.service';
import { ShowAnswersDialogComponent } from '../allQuestions/showAnswersDialog.component';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
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
        private searchService: SearchService,
        private router: Router
    )
    {
        this.translationLoader.loadTranslations(english, french);
        this.action = this.getUrlParameter('action');
        this.domains = ['Biology', 'Chemistry', 'Math', 'Computer Science', 'Philosophy', 'Economy', 'Psychology', 'Medicine', 'Litterature'];

    }

    domains;
    action;
    selectedDomain;
    searchText;
    currentUserId;
    canYouAnswerQuestions: Question[] = [];
    questions: Question[] = [];
    askDialogRef: MatDialogRef<AskQuestionDialogComponent>;
    answerDialogRef: MatDialogRef<AnswerQuestionDialogComponent>;
    showAnswerDialogRef: MatDialogRef<ShowAnswersDialogComponent>;

    ngOnInit(): void {
        this.getAllQuestions();
    }

    getQuestionsByDomain() {
        this.questionService
        .get('?domain=' + this.selectedDomain)
        .subscribe(
            data => {
                console.log(data);
                this.canYouAnswerQuestions = data;
            },
            err => {
                console.log(err);
            }
        );    }
    
    openAnswerQuestion(questionID) {
      this.answerDialogRef = this.dialog.open(AnswerQuestionDialogComponent, {
        data: {
           'questionID': questionID
        }
      });
    }

    openShowAnswers(questionID) {
        this.showAnswerDialogRef = this.dialog.open(ShowAnswersDialogComponent, {
            height: '600px',
            width: '800px',
            data: {
                'questionID': questionID
            }
        });
      }

    openAskQuestion() {
        this.askDialogRef = this.dialog.open(AskQuestionDialogComponent, {
          height: '500px',
          width: '600px',
        });
      }

    search() {
        this.router.navigateByUrl('/questions?action=search&text=' + this.searchText);
        window.location.reload();
    }

    getAllQuestions() {

        if (this.action === 'search') {

            this.searchService
            .search(this.getUrlParameter('text'))
            .subscribe(
                data => {
                    console.log(data);
                    
                    data.hits.hits.forEach(element => {

                        console.log(element);
                        if (element._index === 'questions') {
                            this.questions.push(element._source);
                        }
                    });

                    const el = document.getElementById('questions');
                    el.innerText = 'Search result(s) for "' + this.getUrlParameter('text') + '"';            
                    if (this.getUrlParameter('filter').length !== 0) {

                        console.log('coucou');
                        console.log(this.questions);
                        if (this.getUrlParameter('filter') === 'date') {
                            this.questions.sort((a, b) => {
                                return new Date(a.created).getTime() - new Date(b.created).getTime();
                            });
                        }
                        if (this.getUrlParameter('filter') === 'popularity') {
                            this.questions.sort((a, b) => {
                                return a.popularity - b.popularity;
                            });
                            this.questions.reverse();
                        }
                    }
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
                    if (this.getUrlParameter('filter').length !== 0) {
                        if (this.getUrlParameter('filter') === 'date') {
                                this.questions.sort((a, b) => {
                                    return new Date(a.created).getTime() - new Date(b.created).getTime();
                                });
                        }
                        if (this.getUrlParameter('filter') === 'popularity') {
                            this.questions.sort((a, b) => {
                                return a.popularity - b.popularity;
                            });
                            this.questions.reverse();
                        }
                    }
                },
                err => {
                    console.log(err);
                }
            );
        }
    }

    popularityFilterClicked() {
        if (this.getUrlParameter('action') === 'search') {
            this.router.navigateByUrl('?action=search&text=' + this.getUrlParameter('text') + '&filter=popularity');
        } else {
            this.router.navigateByUrl('?filter=popularity');
        }
        window.location.reload();
    }
    dateFilterClicked() {
        if (this.getUrlParameter('action') === 'search') {
            this.router.navigateByUrl('?action=search&text=' + this.getUrlParameter('text') + '&filter=date');
        } else {
            this.router.navigateByUrl('?filter=date');
        }
        window.location.reload();
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
    
    getUrlParameter(name) {
            const url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) { return null; }
            if (!results[2]) { return ''; }
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
      };
    
}
