import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarkdownOutletComponent } from '../../shared/markdown-outlet/markdown-outlet.component';

@Component({
  standalone: true,
  imports: [MarkdownOutletComponent],
  template: `<app-markdown-outlet class="h-full" src="content/policy.md"></app-markdown-outlet> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyPageComponent {}
