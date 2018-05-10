import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { UniKnowledgeAllQuestionsComponent } from './allQuestions.component';

const routes = [
    {
        path     : 'questions',
        component: UniKnowledgeAllQuestionsComponent
    }
];

@NgModule({
    declarations: [
        UniKnowledgeAllQuestionsComponent,
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        UniKnowledgeAllQuestionsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UniKnowledgeAllQuestionsModule
{
}
