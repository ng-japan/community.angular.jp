import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './policy.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolicyPageComponent {}
