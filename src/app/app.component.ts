import { Component } from '@angular/core';
import { UniKnowledgeSplashScreenService } from './core/services/splash-screen.service';
import { TranslateService } from '@ngx-translate/core';
import { UniKnowledgeTranslationLoaderService } from './core/services/translation-loader.service';

import { UniKnowledgeNavigationService } from './core/components/navigation/navigation.service';

@Component({
    selector   : 'uniKnowledge-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        private uniKnowledgeNavigationService: UniKnowledgeNavigationService,
        private uniKnowledgeSplashScreen: UniKnowledgeSplashScreenService,
        private translate: TranslateService,
        private uniKnowledgeTranslationLoader: UniKnowledgeTranslationLoaderService
    )
    {
        // Add languages
        this.translate.addLangs(['en', 'fr']);

        // Set the default language
        this.translate.setDefaultLang('en');

        // Use a language
        this.translate.use('en');

    }
}
