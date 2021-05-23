import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyPageComponent } from './policy.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [PolicyPageComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PolicyModule {}
