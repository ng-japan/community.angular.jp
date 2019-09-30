import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { HomePageComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GridLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [HomePageComponent],
})
export class HomeModule {}
