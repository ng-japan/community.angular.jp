import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MarkdownOutletComponent } from '../../shared/markdown-outlet/markdown-outlet.component';

@Component({
  standalone: true,
  imports: [MarkdownOutletComponent],
  template: `<app-markdown-outlet class="h-full" [content]="content" ngSkipHydration />`,
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
  @Input({ required: true })
  readonly content!: string;
}
