import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LearnPageComponent } from './learn.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LearnPageComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class LearnRoutingModule {}
