import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { provideMarkdownPage } from './pages/markdown/markdown-page.component';

const markdownPages = [
  {
    path: 'about',
    src: 'content/about.md',
    title: 'About',
  },
  {
    path: 'policy',
    src: 'content/policy.md',
    title: 'コミュニティポリシー',
  },
  {
    path: 'local',
    src: 'content/local-communities.md',
    title: 'ローカルコミュニティ',
  },
  {
    path: 'learn',
    src: 'content/learn-angular.md',
    title: 'Angularを学ぶ',
  },
];

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  ...markdownPages.map((page) => ({
    path: page.path,
    loadComponent: () => import('./pages/markdown/markdown-page.component').then((m) => m.MarkdownPageComponent),
    providers: [provideMarkdownPage(page.src)],
    title: page.title,
  })),
  {
    path: '**',
    redirectTo: '/',
  },
];
