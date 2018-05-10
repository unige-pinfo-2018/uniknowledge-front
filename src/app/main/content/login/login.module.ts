import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { UniKnowledgeLoginComponent } from './login.component';

const routes = [
    {
        path     : 'login',
        component: UniKnowledgeLoginComponent
    }
];

@NgModule({
    declarations: [
        UniKnowledgeLoginComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        UniKnowledgeLoginComponent
    ]
})

export class UniKnowledgeLoginModule
{
}
