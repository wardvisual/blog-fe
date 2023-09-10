import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@/libs/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
