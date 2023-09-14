import { Component } from '@angular/core';

@Component({
  selector: 'user-layout',
  template: `
    <div class="mx-auto container">
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class UserLayout {}
