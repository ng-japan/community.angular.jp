import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './home.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, SharedModule],
  declarations: [HomePageComponent],
})
export class HomeModule {}
