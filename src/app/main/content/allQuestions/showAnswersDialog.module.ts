import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { UniKnowledgeAllQuestionsComponent } from './allQuestions.component';
import { ShowAnswersDialogComponent } from './showAnswersDialog.component';

@NgModule({
    declarations: [
        ShowAnswersDialogComponent
    ],
    imports     : [
        SharedModule,
    ],
    exports     : [
        ShowAnswersDialogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents:    [ShowAnswersDialogComponent]
})

export class UniKnowledgeShowAnswersDialogModule
{
}
