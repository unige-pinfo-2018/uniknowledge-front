import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { UniKnowledgeMainModule } from './main/main.module';
import { UniKnowledgeSplashScreenService } from './core/services/splash-screen.service';
import { UniKnowledgeConfigService } from './core/services/config.service';
import { UniKnowledgeNavigationService } from './core/components/navigation/navigation.service';
import { UniKnowledgeAllQuestionsModule } from './main/content/allQuestions/allQuestions.module';
import { UniKnowledgeMyQuestionsModule } from './main/content/myQuestions/myQuestions.module';
import { UniKnowledgeInformationsModule } from './main/content/informations/informations.module';
import { UniKnowledgeLoginModule } from './main/content/login/login.module';
import { UniKnowledgeSearchBarModule } from './core/components/search-bar/search-bar.module';

import { TranslateModule } from '@ngx-translate/core';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'questions'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        UniKnowledgeMainModule,
        UniKnowledgeAllQuestionsModule,
        UniKnowledgeMyQuestionsModule,
        UniKnowledgeInformationsModule,
        UniKnowledgeLoginModule,
        UniKnowledgeSearchBarModule

    ],
    providers   : [
        UniKnowledgeSplashScreenService,
        UniKnowledgeConfigService,
        UniKnowledgeNavigationService
    ],
    bootstrap   : [
        AppComponent
    ],
})
export class AppModule
{
}
