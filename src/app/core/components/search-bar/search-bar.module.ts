import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';
import { UniKnowledgeSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        UniKnowledgeSearchBarComponent
    ],
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        UniKnowledgeSearchBarComponent
    ],
})
export class UniKnowledgeSearchBarModule
{
}
