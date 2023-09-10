import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'auth-layout',
  template: `
    <header>
      <!-- header content -->
    </header>
    <main class="mx-auto container">
      <router-outlet></router-outlet>
    </main>
    <footer>
      <!-- footer content -->
    </footer>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class AuthLayout {}
