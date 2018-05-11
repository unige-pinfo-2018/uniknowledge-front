import { Component } from '@angular/core';
import { UniKnowledgeTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { UniKnowledgeSearchBarComponent } from '../../../core/components/search-bar/search-bar.component';
import { AskQuestionDialogComponent } from './askQuestionDialog.component';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';
import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';

@Component({
    selector   : 'uniKnowledge-allQuestions',
    templateUrl: './allQuestions.component.html',
    styleUrls  : ['./allQuestions.component.scss']
})
export class UniKnowledgeAllQuestionsComponent
{
    constructor(private translationLoader: UniKnowledgeTranslationLoaderService, private dialog: MatDialog)
    {
        this.translationLoader.loadTranslations(english, french);
    }

    askDialogRef: MatDialogRef<AskQuestionDialogComponent>;
  
    openAskQuestion() {
      this.askDialogRef = this.dialog.open(AskQuestionDialogComponent, {
        height: '400px',
        width: '600px',
      });
    }
    
}
