import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { UniKnowledgePipesModule } from '../pipes/pipes.module';
import { UniKnowledgeMatchMedia } from '../services/match-media.service';
import { UniKnowledgePerfectScrollbarDirective } from '../directives/uniKnowledge-perfect-scrollbar/uniKnowledge-perfect-scrollbar.directive';
import { UniKnowledgeTranslationLoaderService } from '../services/translation-loader.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations   : [
        UniKnowledgePerfectScrollbarDirective,
    ],
    imports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        UniKnowledgePipesModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        UniKnowledgePipesModule,
        UniKnowledgePerfectScrollbarDirective,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        TranslateModule
    ],
    entryComponents: [
    ],
    providers      : [
        CookieService,
        UniKnowledgeMatchMedia,
        UniKnowledgeTranslationLoaderService
    ]
})

export class SharedModule
{

}
