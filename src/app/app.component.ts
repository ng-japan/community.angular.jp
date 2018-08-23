import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private platform: Platform,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const snapshot = this.route.snapshot.firstChild;
        if (snapshot && 'title' in snapshot.data) {
          this.title.setTitle(`${snapshot.data.title} | Angular日本ユーザー会`);
        } else {
          this.title.setTitle(`Angular日本ユーザー会へようこそ！`);
        }

        if (this.platform.isBrowser) {
          (window as any).gtag('config', 'UA-59853299-4', { page_path: e.url });
        }
      }
    });
  }
}
