import { Component } from '@angular/core';

@Component({
  selector: 'auth-layout',
  template: `
    <header>
      <!-- header content -->
    </header>
    <main class="h-full">
      <router-outlet></router-outlet>
    </main>
    <footer>
      <!-- footer content -->
    </footer>
  `,
})
export class AuthLayout {}
