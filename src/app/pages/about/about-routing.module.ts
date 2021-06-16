import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AboutPageComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
