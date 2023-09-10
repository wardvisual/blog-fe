import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  imports: [HttpClientModule, BrowserAnimationsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule {}
