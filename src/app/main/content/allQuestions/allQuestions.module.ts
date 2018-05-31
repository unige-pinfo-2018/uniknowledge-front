import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { AuthGuard } from '../../../core/services/auth-guard.service';

import { UniKnowledgeAllQuestionsComponent } from './allQuestions.component';

const routes = [
    {
        path: 'questions',
        component: UniKnowledgeAllQuestionsComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
    declarations: [
        UniKnowledgeAllQuestionsComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        UniKnowledgeAllQuestionsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class UniKnowledgeAllQuestionsModule {

}
