import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { MyQuestionComponent }      from './my-question/my-question.component';
import { AllQuestionComponent }      from './all-question/all-question.component';
import { MyAnswerComponent }      from './my-answer/my-answer.component';
import { MyProfileComponent }      from './my-profile/my-profile.component';
import { LoginComponent }      from './login/login.component';
import { RegisterComponent }      from './register/register.component';
import { AnswerQuestionComponent }      from './answer-question/answer-question.component';
import { AskQuestionComponent }      from './ask-question/ask-question.component';
const routes: Routes = [
  { path: 'my-question', component: MyQuestionComponent },
  {
    path: 'all-question', component: AllQuestionComponent},
  {
    path: 'my-answer', component: MyAnswerComponent},
  {
    path: 'my-profile', component: MyProfileComponent},
    {
      path: 'login', component: LoginComponent},
      {
        path: 'register', component: RegisterComponent},
        {
          path: 'ask-question', component: AskQuestionComponent},
          {
            path: 'answer-question', component: AnswerQuestionComponent}
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
