import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalPageComponent } from './local.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LocalPageComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class LocalRoutingModule {}
