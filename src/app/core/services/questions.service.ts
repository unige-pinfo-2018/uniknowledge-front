import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { Question } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class QuestionsService {

  likedQuestions;

  constructor(
    private apiService: ApiService
  ) { }

  get(slug): Observable<Question[]> {
    return this.apiService.get('/posts-service/questions/' + slug).pipe(
      map(
        data => {
          console.log(data);
          return data;
        }
      )
    );
  }

  save(question): Observable<Question> {

    console.log('BOOOOYYAAAAAA');
    console.log(question);

    return this.apiService.post('/posts-service/questions', question)
      .pipe(map(
        data => {
          console.log(data);
          return data;
        }));
  }

  like(id): Observable<string> {
    return this.apiService.put('/posts-service/questions/' + id + '?action=upvote')
    .pipe(map(
      data => {
        console.log(data);
        return data;
      }));
  }
}
