import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NzUploadModule } from 'ng-zorro-antd/upload';

import { SharedModule } from '@/libs/shared/shared.module';

import { FeedComponent } from './views/feed/feed.component';
import { UserLayout } from './layouts/user.layout';
import { ProfileComponent } from './views/profile/profile.component';
import { CardComponent } from '@/libs/shared/components/card/card.component';
import { ComposerComponent } from '@/libs/shared/components/composer/composer.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayout,
    children: [
      {
        path: '',
        component: FeedComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    UserLayout,
    FeedComponent,
    ProfileComponent,
    ComposerComponent,
    CardComponent,
  ],
  imports: [SharedModule, NzUploadModule, RouterModule.forChild(routes)],
})
export class UserModule {}
