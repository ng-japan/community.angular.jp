import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './local.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalPageComponent {}
