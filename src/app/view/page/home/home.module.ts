import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { HomePageComponent } from './home.component';

@NgModule({
  imports: [CommonModule, RouterModule, GridLayoutModule, MatButtonModule, MatCardModule],
  declarations: [HomePageComponent],
})
export class HomeModule {}
