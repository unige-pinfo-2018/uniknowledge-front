import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyQuestionComponent } from './my-question/my-question.component';
import { AllQuestionComponent } from './all-question/all-question.component';
import { LoginComponent } from './login/login.component';
import { MyAnswerComponent } from './my-answer/my-answer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyQuestionComponent,
    AllQuestionComponent,
    LoginComponent,
    MyAnswerComponent,
    MyProfileComponent,
    RegisterComponent,
    AskQuestionComponent,
    AnswerQuestionComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
