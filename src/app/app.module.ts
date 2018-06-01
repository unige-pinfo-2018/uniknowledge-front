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
import { UniKnowledgeAllQuestionsModule } from './main/content/allQuestions/allQuestions.module';
import { UniKnowledgeMyQuestionsModule } from './main/content/myQuestions/myQuestions.module';
import { UniKnowledgeLoginModule } from './main/content/login/login.module';
import { UniKnowledgeSearchBarModule } from './core/components/search-bar/search-bar.module';
import { MatDialogModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';
import { UserService } from './core/services/user.service';
import { ApiService } from './core/services/api.service';
import { JwtService } from './core/services/jwt.service';
import { SearchService } from './core/services/search.service';
import { HttpTokenInterceptor } from './core/interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuestionsService} from './core/services/questions.service'
import { User } from './core/models';
import { UniKnowledgeAskQuestionDialogModule } from './main/content/myQuestions/askQuestionDialog.module';
import { UniKnowledgeAnswerQuestionDialogModule } from './main/content/allQuestions/answerQuestionDialog.module';
import { UniKnowledgeShowAnswersDialogModule } from './main/content/allQuestions/showAnswersDialog.module';

import { AuthGuard } from './core/services/auth-guard.service';


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
        UniKnowledgeLoginModule,
        UniKnowledgeSearchBarModule,
        MatDialogModule,
        UniKnowledgeAskQuestionDialogModule,
        UniKnowledgeAnswerQuestionDialogModule,
        UniKnowledgeShowAnswersDialogModule



    ],
    providers   : [
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        UniKnowledgeSplashScreenService,
        UniKnowledgeConfigService,
        UserService,
        ApiService,
        JwtService,
        QuestionsService,
        User,
        AuthGuard,
        SearchService
    ],
    bootstrap   : [
        AppComponent
    ],
})
export class AppModule
{
}
