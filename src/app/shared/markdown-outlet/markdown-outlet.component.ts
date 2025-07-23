import { ChangeDetectionStrategy, Component, inject, input, resource } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { processMarkdown } from '../markdown';

@Component({
  selector: 'app-markdown-outlet',
  template: `
    @if (renderedContent.value(); as html) {
    <div class="content-root" [innerHTML]="html"></div>
    }
  `,
  styleUrls: ['./markdown-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'markdown-outlet',
  },
})
export class MarkdownOutletComponent {
  readonly #sanitizer = inject(DomSanitizer);
  readonly content = input.required<string | null>();
  readonly renderedContent = resource({
    request: () => this.content() ?? undefined,
    loader: async ({ request: content }) => {
      const html = await processMarkdown(content);
      return this.#sanitizer.bypassSecurityTrustHtml(html);
    },
  });
}
