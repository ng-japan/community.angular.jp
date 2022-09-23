import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'policy',
    loadComponent: () => import('./pages/policy/policy.component').then((m) => m.PolicyPageComponent),
    title: 'コミュニティポリシー',
  },
  {
    path: 'local',
    loadComponent: () => import('./pages/local/local.component').then((m) => m.LocalPageComponent),
    title: 'ローカルコミュニティ',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutPageComponent),
    title: 'About',
  },
  {
    path: 'learn',
    loadComponent: () => import('./pages/learn/learn.component').then((m) => m.LearnPageComponent),
    title: 'Angularを学ぶ',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
