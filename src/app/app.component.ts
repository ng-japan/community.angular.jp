import { ChangeDetectionStrategy, Component, signal, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICON_COMPONENTS } from './shared/icons';
import { NAV_LIST_DIRECTIVES } from './shared/nav-list/nav-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NAV_LIST_DIRECTIVES, ICON_COMPONENTS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly ngVersion = VERSION.full;
  readonly isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
