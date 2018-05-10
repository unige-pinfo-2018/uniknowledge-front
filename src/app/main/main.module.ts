import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../core/modules/shared.module';

import { UniKnowledgeMainComponent } from './main.component';
import { UniKnowledgeContentComponent } from './content/content.component';
import { UniKnowledgeToolbarComponent } from './toolbar/toolbar.component';
import { UniKnowledgeNavBarMenuComponent } from './navBarMenu/navBarMenu.component';
import { UniKnowledgeNavigationModule } from '../core/components/navigation/navigation.module';

import { UniKnowledgeSearchBarModule } from '../core/components/search-bar/search-bar.module';

@NgModule({
    declarations: [
        UniKnowledgeContentComponent,
        UniKnowledgeMainComponent,
        UniKnowledgeToolbarComponent,
        UniKnowledgeNavBarMenuComponent,
    ],
    imports     : [
        SharedModule,
        RouterModule,
        UniKnowledgeNavigationModule,
        UniKnowledgeSearchBarModule
    ],
    exports     : [
        UniKnowledgeMainComponent
    ]
})

export class UniKnowledgeMainModule
{
}
