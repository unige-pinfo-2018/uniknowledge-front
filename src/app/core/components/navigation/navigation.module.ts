import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { UniKnowledgeNavigationComponent } from './navigation.component';
import { UniKnowledgeNavVerticalItemComponent } from './vertical/nav-item/nav-vertical-item.component';
import { UniKnowledgeNavVerticalCollapseComponent } from './vertical/nav-collapse/nav-vertical-collapse.component';
import { UniKnowledgeNavVerticalGroupComponent } from './vertical/nav-group/nav-vertical-group.component';

@NgModule({
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        UniKnowledgeNavigationComponent
    ],
    declarations: [
        UniKnowledgeNavigationComponent,
        UniKnowledgeNavVerticalGroupComponent,
        UniKnowledgeNavVerticalItemComponent,
        UniKnowledgeNavVerticalCollapseComponent,
    ]
})
export class UniKnowledgeNavigationModule
{
}
