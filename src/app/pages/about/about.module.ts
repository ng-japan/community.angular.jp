import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, SharedModule],
})
export class AboutUsModule {}
