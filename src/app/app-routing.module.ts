import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './view/page/home/home.component';
import { PolicyPageComponent } from './view/page/policy/policy.component';
import { LocalPageComponent } from './view/page/local/local.component';

export const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'policy',
    component: PolicyPageComponent,
  },
  {
    path: 'local',
    component: LocalPageComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
