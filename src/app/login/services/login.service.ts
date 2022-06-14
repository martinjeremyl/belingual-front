import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/apiResponse';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>('/login', { email, password })
      .pipe(shareReplay());
  }

  register(user: User) {
    return this.http.post<ApiResponse>('/register', { user });
  }
}
