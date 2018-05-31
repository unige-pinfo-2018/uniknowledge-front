import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { UniKnowledgeMyQuestionsComponent } from './myQuestions.component';
import { AskQuestionDialogComponent } from './askQuestionDialog.component';
const routes = [
    {
        path     : 'my/questions',
        component: UniKnowledgeMyQuestionsComponent
    }
];

@NgModule({
    declarations: [
        AskQuestionDialogComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        AskQuestionDialogComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents:    [AskQuestionDialogComponent]
})

export class UniKnowledgeAskQuestionDialogModule
{
}
