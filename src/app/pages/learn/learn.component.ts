import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarkdownOutletComponent } from '../../shared/markdown-outlet/markdown-outlet.component';

@Component({
  standalone: true,
  imports: [MarkdownOutletComponent],
  template: `<app-markdown-outlet src="content/learn-angular.md"></app-markdown-outlet> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnPageComponent {}
