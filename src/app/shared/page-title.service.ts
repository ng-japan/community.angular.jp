import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const baseTitle = 'Angular Japan User Group';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  readonly titleChange$: Observable<string> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => {
      const pageTitle = this.route.snapshot.root.firstChild?.data?.documentTitle;
      if (typeof pageTitle === 'string') {
        return `${pageTitle} | ${baseTitle}`;
      } else {
        return baseTitle;
      }
    }),
  );

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {}
}
