import { ChangeDetectionStrategy, Component, Input, computed, effect, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { processMarkdown } from '../markdown';

@Component({
  selector: 'app-markdown-outlet',
  standalone: true,
  imports: [],
  template: `
    @if (contentHTML(); as html) {
    <div class="content-root" [innerHTML]="html"></div>
    }
  `,
  styleUrls: ['./markdown-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'markdown-outlet',
  },
})
export class MarkdownOutletComponent {
  readonly #sanitizer = inject(DomSanitizer);
  readonly #content = signal<string | null>(null);
  readonly #rendered = signal<string | null>(null);
  readonly contentHTML = computed(() => {
    const rendered = this.#rendered();
    if (!rendered) return null;
    return this.#sanitizer.bypassSecurityTrustHtml(rendered);
  });

  @Input()
  set content(value: string) {
    this.#content.set(value);
  }

  constructor() {
    effect(async () => {
      const content = this.#content();
      if (!content) return;

      const html = await processMarkdown(content);
      this.#rendered.set(html);
    });
  }
}
