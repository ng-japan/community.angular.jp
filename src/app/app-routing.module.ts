import { HomePageComponent } from './view/page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommunitiesPageComponent } from './view/page/communities/communities.component';

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
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
