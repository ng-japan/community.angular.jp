import { Component, ChangeDetectionStrategy, InjectionToken, inject } from '@angular/core';
import { MarkdownOutletComponent } from '../../shared/markdown-outlet/markdown-outlet.component';

const MARKDOWN_PAGE_SOURCE = new InjectionToken<string>('MARKDOWN_PAGE_SOURCE');

export function provideMarkdownPage(src: string) {
  return {
    provide: MARKDOWN_PAGE_SOURCE,
    useValue: src,
  };
}

@Component({
  standalone: true,
  imports: [MarkdownOutletComponent],
  template: `<app-markdown-outlet class="h-full" [src]="source"></app-markdown-outlet> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownPageComponent {
  readonly source = inject(MARKDOWN_PAGE_SOURCE);
}
