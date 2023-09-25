import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@/features/auth/auth.service';
import { RegisterDto } from '@/features/auth/dtos/register.dto';

import { AuthStore } from '@/features/auth/auth.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    public readonly store: AuthStore,
    public readonly router: Router
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup<RegisterDto>({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
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

    this.store.resetState();
  }

  get field(): any {
    return {
      firstName: this.registerForm.get('firstName'),
      lastName: this.registerForm.get('lastName'),
      username: this.registerForm.get('username'),
      password: this.registerForm.get('password'),
    };
  }

  register(event: Event) {
    event.preventDefault();

    const user = this.registerForm.getRawValue();

    this.store.setState({ isLoading: true });

    this.authService.register(user).subscribe(
      (res) => {
        this.store.setState({
          isAuthenticated: true,
          message: res.message,
          isSuccess: true,
          isLoading: false,
        });

        this.router.navigate(['/login']);
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
