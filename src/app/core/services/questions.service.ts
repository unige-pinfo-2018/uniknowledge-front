import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { question, question } from '../models';

@Injectable()
export class QuestionsService {

  constructor(
    private apiService: ApiService
  ) { }

  get(slug): Observable<question>{
    return this.apiService.get('/posts-service/questions/' + slug) //requires testing
           .map(data => data.question);
  }

  save(question): Observable<question> {
    //if the question already exists we can edit it
    if (question.slug){
      return this.apiService.put('/post-service/questions/'+ question.slug,{ question: question})
             .map(data => data.question); //not sure about the request for this but shouldnt be too much different
    } else{ // othrwise its a new question
      return this.apiService.post( '/post-service/questions/', {question: question})
             .map(data => data.question)
    }
  }
}
