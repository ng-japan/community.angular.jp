import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, of, ReplaySubject } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { processMarkdown } from '../markdown';

@Component({
  selector: 'app-markdown-outlet',
  standalone: true,
  imports: [AsyncPipe],
  template: `<div class="content-root" [innerHTML]="html$ | async"></div> `,
  styleUrls: ['./markdown-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'markdown-outlet',
  },
})
export class MarkdownOutletComponent {
  @Input()
  set src(value: string) {
    this.markdownSource$.next(value);
  }

  private readonly markdownSource$ = new ReplaySubject<string>(1);

  readonly html$ = this.markdownSource$.pipe(
    filter((value) => value != null),
    switchMap((source) =>
      this.httpClient
        .get(source, { responseType: 'text' })
        .pipe(catchError((error: HttpErrorResponse) => of(error.message))),
    ),
    switchMap((markdown) => from(processMarkdown(markdown))),
    map((html) => this.sanitizer.bypassSecurityTrustHtml(html)),
  );

  constructor(private readonly sanitizer: DomSanitizer, private httpClient: HttpClient) {}
}
