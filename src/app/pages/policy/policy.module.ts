import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyPageComponent } from './policy.component';
import { SharedModule } from '../../shared/shared.module';
import { PolicyRoutingModule } from './policy-routing.module';

@NgModule({
  declarations: [PolicyPageComponent],
  imports: [CommonModule, SharedModule, PolicyRoutingModule],
})
export class PolicyModule {}
