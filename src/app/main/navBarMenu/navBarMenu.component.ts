import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UniKnowledgeConfigService } from '../../core/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { UniKnowledgeTranslationLoaderService } from '../../core/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';

@Component({
    selector   : 'uniKnowledge-navbarmenu',
    templateUrl: './navBarMenu.component.html',
    styleUrls  : ['./navBarMenu.component.scss']
})

export class UniKnowledgeNavBarMenuComponent
{
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;

    constructor(
        private router: Router,
        private uniKnowledgeConfig: UniKnowledgeConfigService,
        private translate: TranslateService,
        private translationLoader: UniKnowledgeTranslationLoaderService
    )
    {
        this.languages = [
            {
                'id'   : 'en',
                'title': 'English',
                'flag' : 'us'
            },
            {
                'id'   : 'fr',
                'title': 'Français',
                'flag' : 'fr'
            }
        ];

        this.selectedLanguage = this.languages[0];

        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationStart )
                {
                    this.showLoadingBar = true;
                }
                if ( event instanceof NavigationEnd )
                {
                    this.showLoadingBar = false;
                }
            });

        this.uniKnowledgeConfig.onSettingsChanged.subscribe((settings) => {
            this.horizontalNav = settings.layout.navigation === 'top';
        });

        this.translationLoader.loadTranslations(english, french);

    }

    setLanguage(lang)
    {
        // Set the selected language for toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this.translate.use(lang.id);
    }
}
