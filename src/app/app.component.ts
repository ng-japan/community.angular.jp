import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { PageTitleService } from './shared/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isMobile = false;

  readonly activeLinkClass = ['bg-gray-100'];

  @ViewChild(MatSidenav, { static: true }) sideNav!: MatSidenav;

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly pageTitleService: PageTitleService,
    private readonly titleService: Title,
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(map((state) => state.matches))
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
        if (!isMobile) {
          this.sideNav.open();
        } else {
          this.sideNav.close();
        }
      });

    this.pageTitleService.titleChange$.subscribe((pageTitle) => this.titleService.setTitle(pageTitle));
  }

  onNavClick() {
    if (this.sideNav.mode === 'over') {
      this.sideNav.close();
    }
  }
}
