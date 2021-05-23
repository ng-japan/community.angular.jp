import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalPageComponent } from './local.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [LocalPageComponent],
  imports: [CommonModule, ComponentsModule],
})
export class LocalModule {}
