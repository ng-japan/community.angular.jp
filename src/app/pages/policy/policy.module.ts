import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyPageComponent } from './policy.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PolicyPageComponent],
  imports: [CommonModule, SharedModule],
})
export class PolicyModule {}
