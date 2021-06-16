import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalPageComponent } from './local.component';
import { SharedModule } from '../../shared/shared.module';
import { LocalRoutingModule } from './local-routing.module';

@NgModule({
  declarations: [LocalPageComponent],
  imports: [CommonModule, SharedModule, LocalRoutingModule],
})
export class LocalModule {}
