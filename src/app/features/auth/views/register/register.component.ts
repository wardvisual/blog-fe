import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@/features/auth/auth.service';
import { LoginDto } from '@/features/auth/dtos/login.dto';

import { AuthStore } from '@/features/auth/auth.store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    public readonly store: AuthStore
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup<LoginDto>({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get field(): any {
    return {
      username: this.loginForm.get('username'),
      password: this.loginForm.get('password'),
    };
  }

  login(event: Event) {
    event.preventDefault();

    const user = this.loginForm.getRawValue();

    this.store.setState({ isLoading: true });

    this.authService.login(user).subscribe(
      (res) => {
        this.store.setState({
          isAuthenticated: true,
          message: res.message,
          isSuccess: true,
          isLoading: false,
        });

        this.authService.setToken(res.data.accessToken);
      },
      ({ error }) => {
        this.store.setState({
          isAuthenticated: false,
          message: error.message,
          isSuccess: false,
          isLoading: false,
        });
      }
    );
  }
}
