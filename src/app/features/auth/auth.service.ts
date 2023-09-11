import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginDto } from './dtos/login.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(user: LoginDto): Observable<any> {
    return from(this.http.post(`${environment.apiUrl}/auth/login`, user));
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
