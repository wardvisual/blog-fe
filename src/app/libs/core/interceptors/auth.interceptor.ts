import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { AuthService } from '@/features/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.authService.isAuthenticated();
    const isUrlValid = request.url.startsWith(environment.apiUrl);

    if (isAuthenticated && isUrlValid)
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${isAuthenticated}`,
        },
      });

    return next.handle(request);
  }
}
