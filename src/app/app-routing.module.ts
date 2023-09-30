import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'feed',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/posts/posts.module').then((m) => m.PostsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
