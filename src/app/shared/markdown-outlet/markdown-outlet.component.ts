import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { map, switchMap } from 'rxjs';
import { processMarkdown } from '../markdown';

@Component({
  selector: 'app-markdown-outlet',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (rendered$ | async; as html) {
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
  readonly rendered$ = toObservable(this.#content).pipe(
    switchMap((content) => processMarkdown(content ?? '')),
    map((html) => this.#sanitizer.bypassSecurityTrustHtml(html)),
  );

  @Input()
  set content(value: string) {
    this.#content.set(value);
  }
}
