import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './home.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [HomePageComponent],
})
export class HomeModule {}
