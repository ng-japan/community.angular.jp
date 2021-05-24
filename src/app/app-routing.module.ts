import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { PolicyPageComponent } from './pages/policy/policy.component';
import { LocalPageComponent } from './pages/local/local.component';
import { AboutPageComponent } from './pages/about/about.component';
import { LearnPageComponent } from './pages/learn/learn.component';

export const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
    data: {},
  },
  {
    path: 'policy',
    component: PolicyPageComponent,
    data: {
      documentTitle: 'コミュニティポリシー',
    },
  },
  {
    path: 'local',
    component: LocalPageComponent,
    data: {
      documentTitle: 'ローカルコミュニティ',
    },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      documentTitle: 'About',
    },
  },
  {
    path: 'learn',
    component: LearnPageComponent,
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
