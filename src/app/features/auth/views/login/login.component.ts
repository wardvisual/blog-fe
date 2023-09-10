import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '@/features/auth/auth.service';
import { LoginDto } from '@/features/auth/dtos/login.dto';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup<LoginDto>({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  login(event: Event) {
    event.preventDefault();

    const user = this.loginForm.getRawValue();

    this.authService.login(user).subscribe((result: any) => {
      if (!result.isSuccess) {
        return;
      }

      this.authService.setToken(result.data.accessToken);

      // navigate to dashboard
    });
  }
}
