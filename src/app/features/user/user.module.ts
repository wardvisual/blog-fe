import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@/libs/shared/shared.module';

import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UserLayout } from './layouts/user.layout';

const routes: Routes = [
  {
    path: '',
    component: UserLayout,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [UserLayout, HomeComponent, ProfileComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class UserModule {}
