import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, ReplaySubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, switchMap } from 'rxjs/operators';
import { processMarkdown } from '../../../markdown';

@Component({
  selector: 'app-markdown-outlet',
  templateUrl: './markdown-outlet.component.html',
  styleUrls: ['./markdown-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
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
    switchMap((source) => from(ajax({ url: source, responseType: 'text' }))),
    switchMap(({ response }) => from(processMarkdown(response))),
    map((html) => this.sanitizer.bypassSecurityTrustHtml(html)),
  );

  constructor(private readonly sanitizer: DomSanitizer) {}
}
