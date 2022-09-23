import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICON_COMPONENTS } from './shared/icons';
import { NAV_LIST_DIRECTIVES } from './shared/nav-list/nav-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NAV_LIST_DIRECTIVES, ICON_COMPONENTS],
  templateUrl: './app.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AppComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
