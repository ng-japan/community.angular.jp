import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MarkdownOutletComponent } from './markdown-outlet/markdown-outlet.component';

@NgModule({
  declarations: [CardComponent, MarkdownOutletComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardComponent, MarkdownOutletComponent],
})
export class ComponentsModule {}
