import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { InputComponent } from '@/libs/shared/components';

import { NgIconsModule } from '@ng-icons/core';
import { heroUsers, heroArchiveBox } from '@ng-icons/heroicons/outline';
import {
  ionImage,
  ionText,
  ionCode,
  ionTerminal,
  ionHome,
  ionSearch,
  ionNotifications,
  ionPerson,
  ionBookmark,
} from '@ng-icons/ionicons';

const icons = {
  heroUsers,
  heroArchiveBox,
  ionImage,
  ionText,
  ionCode,
  ionTerminal,
  ionHome,
  ionSearch,
  ionNotifications,
  ionPerson,
  ionBookmark,
};

const modules: any = [
  CommonModule,
  ReactiveFormsModule,
  NzAlertModule,
  NzInputModule,
  NzButtonModule,
  NzCardModule,
  NzAvatarModule,
  NzIconModule,

  NgIconsModule.withIcons(icons),
];

const components = [InputComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
