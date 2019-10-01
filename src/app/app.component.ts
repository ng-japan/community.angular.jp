import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMobile = false;

  @ViewChild(MatSidenav, { static: true }) sideNav!: MatSidenav;

  private readonly onDestroy$ = new Subject();

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe('(max-width: 600px)')
      .pipe(
        takeUntil(this.onDestroy$),
        map(state => state.matches),
      )
      .subscribe(isMobile => {
        this.isMobile = isMobile;
        if (!isMobile) {
          this.sideNav.open();
        } else {
          this.sideNav.close();
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
