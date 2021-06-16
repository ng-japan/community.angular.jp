import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MarkdownOutletComponent } from './markdown-outlet/markdown-outlet.component';

@NgModule({
  declarations: [CardComponent, MarkdownOutletComponent],
  imports: [CommonModule],
  exports: [CardComponent, MarkdownOutletComponent],
})
export class SharedModule {}
