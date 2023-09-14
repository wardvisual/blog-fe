import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'profile',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
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
