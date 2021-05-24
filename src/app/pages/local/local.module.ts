import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalPageComponent } from './local.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LocalPageComponent],
  imports: [CommonModule, SharedModule],
})
export class LocalModule {}
