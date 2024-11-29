import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MarkdownOutletComponent } from '../../shared/markdown-outlet/markdown-outlet.component';

@Component({
  imports: [MarkdownOutletComponent],
  template: `
    @defer (hydrate never) {
    <app-markdown-outlet class="h-full" [content]="content()" />
    }
  `,
  styles: `
      :host {
        display: block;
      }
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownPageComponent {
  readonly content = input.required<string>();
}
