import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, ComponentsModule],
})
export class AboutUsModule {}
