import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { CommunitiesPageComponent } from './communities.component';

@NgModule({
  imports: [CommonModule, GridLayoutModule, MatButtonModule, MatIconModule, MatListModule],
  declarations: [CommunitiesPageComponent],
})
export class CommunitiesModule {}
