import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../core/modules/shared.module';

import { UniKnowledgeMainComponent } from './main.component';
import { UniKnowledgeContentComponent } from './content/content.component';
import { UniKnowledgeFooterComponent } from './footer/footer.component';
import { UniKnowledgeToolbarComponent } from './toolbar/toolbar.component';
import { UniKnowledgeNavBarMenuComponent } from './navBarMenu/navBarMenu.component';
import { UniKnowledgeNavigationModule } from '../core/components/navigation/navigation.module';

import { UniKnowledgeSearchBarModule } from '../core/components/search-bar/search-bar.module';
import { UniKnowledgeThemeOptionsComponent } from '../core/components/theme-options/theme-options.component';

@NgModule({
    declarations: [
        UniKnowledgeContentComponent,
        UniKnowledgeFooterComponent,
        UniKnowledgeMainComponent,
        UniKnowledgeToolbarComponent,
        UniKnowledgeNavBarMenuComponent,
        UniKnowledgeThemeOptionsComponent,
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
