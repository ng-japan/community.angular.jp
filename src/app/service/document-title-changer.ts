import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

const baseTitle = 'Angular Japan User Group';

@Injectable({
  providedIn: 'root',
})
export class DocumentTitleChanger {
  constructor(
    private readonly titleService: Title,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  connect(disposer: Observable<unknown>) {
    this.router.events
      .pipe(
        takeUntil(disposer),
        filter(event => event instanceof NavigationEnd),
      )
      .subscribe(() => {
        // tslint:disable-next-line: no-non-null-assertion
        const data = this.route.snapshot.root.firstChild!.data;
        if (typeof data !== 'undefined' && typeof data.documentTitle === 'string') {
          this.titleService.setTitle(`${data.documentTitle} | ${baseTitle}`);
        } else {
          this.titleService.setTitle(baseTitle);
        }
      });
  }
}
