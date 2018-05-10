import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { UniKnowledgeMyQuestionsComponent } from './myQuestions.component';

const routes = [
    {
        path     : 'my/questions',
        component: UniKnowledgeMyQuestionsComponent
    }
];

@NgModule({
    declarations: [
        UniKnowledgeMyQuestionsComponent,
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        UniKnowledgeMyQuestionsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UniKnowledgeMyQuestionsModule
{
}
