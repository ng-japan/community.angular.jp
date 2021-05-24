import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnPageComponent } from './learn.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LearnPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [LearnPageComponent],
})
export class LearnModule {}
