import { ChangeDetectionStrategy, Component, inject, input, resource } from '@angular/core';
import { MarkdownOutletComponent } from '../../shared/markdown-outlet/markdown-outlet.component';
import { ContentResolver } from 'src/app/shared/content-resolver';

@Component({
  imports: [MarkdownOutletComponent],
  template: `
    @if(markdownResource.value(); as markdown) {
    <app-markdown-outlet class="h-full" [content]="markdown" />
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
  readonly #contentResolver = inject(ContentResolver);

  /**
   * The relative path to the Markdown file to be rendered.
   */
  readonly content = input.required<string>();

  readonly markdownResource = resource({
    params: () => this.content() ?? undefined,
    loader: async ({ params: content }) => {
      return this.#contentResolver.get(content);
    },
  });
}
