import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '@/features/auth/auth.service';
import { LoginDto } from '@/features/auth/dtos/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private readonly authService: AuthService) {}

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
      if (result.isSuccess) {
        this.authService.setToken(result.data.accessToken);
      }
    });
  }
}
