import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { MarkdownPageComponent } from './pages/markdown/markdown-page.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: MarkdownPageComponent,
    data: { content: 'content/about.md' },
    title: 'About',
  },
  {
    path: 'policy',
    component: MarkdownPageComponent,
    data: { content: 'content/policy.md' },
    title: 'コミュニティポリシー',
  },
  {
    path: 'local',
    component: MarkdownPageComponent,
    data: { content: 'content/local-communities.md' },
    title: 'ローカルコミュニティ',
  },
  {
    path: 'learn',
    component: MarkdownPageComponent,
    data: { content: 'content/learn-angular.md' },
    title: 'Angularを学ぶ',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
