import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';
import { ICON_COMPONENTS } from '../../shared/icons';

@Component({
  standalone: true,
  imports: [RouterLinkWithHref, CardComponent, ICON_COMPONENTS],
  templateUrl: './home.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
