import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { CommunitiesPageComponent } from './communities.component';

@NgModule({
  imports: [CommonModule, GridLayoutModule, MatButtonModule, MatIconModule, MatListModule],
  declarations: [CommunitiesPageComponent],
})
export class CommunitiesModule {}
