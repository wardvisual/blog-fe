import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { InputComponent } from '@/libs/shared/components';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  NzAlertModule,
  NzInputModule,
  NzButtonModule,
];

const components = [InputComponent]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
