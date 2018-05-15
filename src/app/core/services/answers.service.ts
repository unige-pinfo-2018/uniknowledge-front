import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ApiService} from './api.service'
import {answers} from '../models'


@Injectable()
export class AnswersService {
  constructor(
    private apiservice: ApiService
  ) {}

  add(slug,payload): Observable<answers>{
    //Temporary for now on the placement of the question id
    return this.apiservice.post(`/posts-service/questions/${slug}/answers`, {answer: {body: payload}})
           .map(data => data.answer)
  }

  destroy(answerId, answerSlug){
    return this.apiservice.delete(`/posts-service/questions/${answerSlug}/answers/${answerId}`);
  }
}
