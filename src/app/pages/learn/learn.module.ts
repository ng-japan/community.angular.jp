import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnPageComponent } from './learn.component';
import { SharedModule } from '../../shared/shared.module';
import { LearnRoutingModule } from './learn-routing.module';

@NgModule({
  declarations: [LearnPageComponent],
  imports: [CommonModule, SharedModule, LearnRoutingModule],
})
export class LearnModule {}
