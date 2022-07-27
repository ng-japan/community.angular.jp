import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then((m) => m.PolicyModule),
    title: 'コミュニティポリシー',
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/local/local.module').then((m) => m.LocalModule),
    title: 'ローカルコミュニティ',
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutUsModule),
    title: 'About',
  },
  {
    path: 'learn',
    loadChildren: () => import('./pages/learn/learn.module').then((m) => m.LearnModule),
    title: 'Angularを学ぶ',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
