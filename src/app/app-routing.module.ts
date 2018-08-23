import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommunitiesPageComponent } from './view/page/communities/communities.component';
import { HomePageComponent } from './view/page/home/home.component';

export const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'communities',
    component: CommunitiesPageComponent,
    data: {
      title: 'Angular Japan Communities',
    },
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
