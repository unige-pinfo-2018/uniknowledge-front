import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { UniKnowledgeAllQuestionsComponent } from './allQuestions.component';
import { AnswerQuestionDialogComponent } from './answerQuestionDialog.component';
const routes = [
    {
        path     : 'my/questions',
        component: UniKnowledgeAllQuestionsComponent
    }
];

@NgModule({
    declarations: [
        AnswerQuestionDialogComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        AnswerQuestionDialogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents:    [AnswerQuestionDialogComponent]
})

export class UniKnowledgeAnswerQuestionDialogModule
{
}
