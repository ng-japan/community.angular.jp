import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { IconsModule } from './icons/icons.module';
import { MarkdownOutletComponent } from './markdown-outlet/markdown-outlet.component';
import { NavListDirective, NavListItemDirective } from './nav-list/nav-list';

@NgModule({
  declarations: [CardComponent, MarkdownOutletComponent, NavListDirective, NavListItemDirective],
  imports: [CommonModule],
  exports: [CardComponent, MarkdownOutletComponent, NavListDirective, NavListItemDirective, IconsModule],
})
export class SharedModule {}
