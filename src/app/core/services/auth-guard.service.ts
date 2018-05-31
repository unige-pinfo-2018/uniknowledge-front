import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import 'rxjs/add/observable/of';

import { UserService } from './user.service';
import { take } from 'rxjs/operators/take';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private httpClient: HttpClient
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.userService
    .isAuthenticated().map(e => {
      if (e) {
          return true;
      }
  }).catch(() => {
      this.router.navigate(['/login']);
      return Observable.of(false);
  });  
  }
}
