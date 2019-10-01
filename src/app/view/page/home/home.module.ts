import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [HomePageComponent],
})
export class HomeModule {}
