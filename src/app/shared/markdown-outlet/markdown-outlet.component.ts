import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, effect, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ContentResolver } from '../content-resolver';
import { processMarkdown } from '../markdown';

@Component({
  selector: 'app-markdown-outlet',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="contentHTML() as html" class="content-root" [innerHTML]="html"></div> `,
  styleUrls: ['./markdown-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'markdown-outlet',
  },
})
export class MarkdownOutletComponent {
  readonly #contentResolver = inject(ContentResolver);
  readonly #sanitizer = inject(DomSanitizer);
  readonly #sourceURL = signal<string | null>(null);
  readonly #rendered = signal<string | null>(null);
  readonly contentHTML = computed(() => {
    const rendered = this.#rendered();
    if (!rendered) return null;
    return this.#sanitizer.bypassSecurityTrustHtml(rendered);
  });

  @Input()
  set src(value: string) {
    this.#sourceURL.set(value);
  }

  constructor() {
    effect(async () => {
      const source = this.#sourceURL();
      if (!source) return;

      const markdown = await this.#contentResolver.get(source);
      const html = await processMarkdown(markdown);
      this.#rendered.set(html);
    });
  }
}
