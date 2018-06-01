import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';
import { Question } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SearchService {

  constructor(
    private apiService: ApiService
  ) { }

  search(text): Observable<Question[]> {

    return this.apiService.post('/search-service', {'text': text})
      .pipe(map(
        data => {
          console.log(data);
          return data;
        }));
  }
}
