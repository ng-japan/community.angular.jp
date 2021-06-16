import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageTitleService } from './shared/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  isMenuOpen = false;

  constructor(private readonly pageTitleService: PageTitleService, private readonly titleService: Title) {}

  ngOnInit() {
    this.pageTitleService.titleChange$.subscribe((pageTitle) => this.titleService.setTitle(pageTitle));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
