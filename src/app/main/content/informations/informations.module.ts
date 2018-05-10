import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';

import { UniKnowledgeInformationsComponent } from './informations.component';

const routes = [
    {
        path     : 'informations',
        component: UniKnowledgeInformationsComponent
    }
];

@NgModule({
    declarations: [
        UniKnowledgeInformationsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        UniKnowledgeInformationsComponent
    ]
})

export class UniKnowledgeInformationsModule
{
}
