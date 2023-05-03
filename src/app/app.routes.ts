import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { MarkdownPageComponent, provideMarkdownPage } from './pages/markdown/markdown-page.component';

export const markdownPages = [
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
] as const;

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  ...markdownPages.map((page) => ({
    path: page.path,
    component: MarkdownPageComponent,
    providers: [provideMarkdownPage(page.src)],
    title: page.title,
  })),
  {
    path: '**',
    redirectTo: '/',
  },
];
