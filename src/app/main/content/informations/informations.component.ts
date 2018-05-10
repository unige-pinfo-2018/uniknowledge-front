import { Component } from '@angular/core';
import { UniKnowledgeTranslationLoaderService } from '../../../core/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';

@Component({
    selector   : 'uniKnowledge-informations',
    templateUrl: './informations.component.html',
    styleUrls  : ['./informations.component.scss']
})
export class UniKnowledgeInformationsComponent
{
    constructor(private translationLoader: UniKnowledgeTranslationLoaderService)
    {
        this.translationLoader.loadTranslations(english, french);
    }
}
