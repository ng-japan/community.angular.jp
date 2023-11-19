import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { MarkdownPageComponent } from './pages/markdown/markdown-page.component';
import { ContentResolver } from './shared/content-resolver';

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
    resolve: {
      content: () => {
        const contentResolver = inject(ContentResolver);
        return contentResolver.get(page.src);
      },
    },
  })),
  {
    path: '**',
    redirectTo: '/',
  },
];
