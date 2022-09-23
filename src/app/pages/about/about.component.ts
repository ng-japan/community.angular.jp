import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MarkdownOutletComponent } from '../../shared/markdown-outlet/markdown-outlet.component';

@Component({
  standalone: true,
  imports: [MarkdownOutletComponent],
  template: `<app-markdown-outlet class="h-full" src="content/about.md"></app-markdown-outlet> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {}
