import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'auth-layout',
  template: `
    <div class="grid h-full place-items-center md:grid-cols-2">
      <main class="max-w-lg p-5 text-start md:px-8">
        <router-outlet></router-outlet>
      </main>
      <div class="hidden md:w-full md:block md:h-screen md:bg-blue-500"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayout {}
