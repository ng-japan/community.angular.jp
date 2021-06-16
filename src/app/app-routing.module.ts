import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    data: {},
  },
  {
    path: 'policy',
    loadChildren: () => import('./pages/policy/policy.module').then((m) => m.PolicyModule),
    data: {
      documentTitle: 'コミュニティポリシー',
    },
  },
  {
    path: 'local',
    loadChildren: () => import('./pages/local/local.module').then((m) => m.LocalModule),
    data: {
      documentTitle: 'ローカルコミュニティ',
    },
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutUsModule),
    data: {
      documentTitle: 'About',
    },
  },
  {
    path: 'learn',
    loadChildren: () => import('./pages/learn/learn.module').then((m) => m.LearnModule),
    data: {
      documentTitle: 'Angularを学ぶ',
    },
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
