import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { SharedModule } from '@/libs/shared/shared.module';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthLayout } from './layouts/auth.layout';
import { InputComponent } from '@/libs/shared/components/input/input.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AuthLayout, LoginComponent, RegisterComponent, InputComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    CommonModule,

    NzAlertModule,
    NzInputModule,
    NzButtonModule,

    RouterModule.forChild(routes),
  ],
  exports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class AuthModule {}
