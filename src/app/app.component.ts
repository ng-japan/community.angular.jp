import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { DocumentTitleChanger } from './service/document-title-changer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMobile = false;

  @ViewChild(MatSidenav, { static: true }) sideNav!: MatSidenav;

  private readonly onDestroy$ = new Subject();

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly documentTitleChanger: DocumentTitleChanger,
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(
        takeUntil(this.onDestroy$),
        map((state) => state.matches),
      )
      .subscribe((isMobile) => {
        this.isMobile = isMobile;
        if (!isMobile) {
          this.sideNav.open();
        } else {
          this.sideNav.close();
        }
      });

    this.documentTitleChanger.connect(this.onDestroy$);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onNavClick() {
    if (this.sideNav.mode === 'over') {
      this.sideNav.close();
    }
  }
}
