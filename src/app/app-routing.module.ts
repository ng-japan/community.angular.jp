import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommunitiesPageComponent } from './view/page/communities/communities.component';
import { HomePageComponent } from './view/page/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
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
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
