import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { HomePageComponent } from './home.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, MatCardModule, ComponentsModule],
  declarations: [HomePageComponent],
})
export class HomeModule {}
