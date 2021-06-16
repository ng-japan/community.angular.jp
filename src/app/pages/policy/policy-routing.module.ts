import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PolicyPageComponent } from './policy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: PolicyPageComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PolicyRoutingModule {}
