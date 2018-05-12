import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { map } from 'rxjs/operators/map';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  public user: User = {
    email: 'exem',
    token: '',
    username: 'jodoe',
    firstName: 'John',
    lastName: 'Doe',
    bio: '',
    profilePictureURL: 'assets/images/avatars/profile.jpg'
  };

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get('/users-service/users/me')
      .subscribe(
        data => this.setAuth(data),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);

    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  getUserInfos() {
    const route = '/users/me';
    return this.apiService.get('/users-service' + route)
    .pipe(map(
    data => {
      console.log(data);
      this.user.email = data.email;
      this.user.username = data.firstName + ' ' + data.lastName;
      this.user.profilePictureURL = data.profilePictureURL;

      console.log(this.user);
      return data;
    }, 
    err => console.log(err)
  ));
  }

  attemptLogout() {
    const route = '/logout';
    return this.apiService.post('/users-service' + route)
    .pipe(map(
    data => {
      this.purgeAuth();
      return data;
    }
  ));
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users-service' + route, credentials)
      .pipe(map(
      data => {
        this.setAuth(data);
        return data;
      }
    ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .pipe(map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }

}
