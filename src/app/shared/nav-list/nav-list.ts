import { Directive, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Directive({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[appNavListItem]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'flex items-center h-12 px-4 no-underline text-black hover:bg-gray-100',
    '[class.bg-gray-100]': 'active',
  },
})
export class NavListItemDirective {
  readonly routerLinkActive = inject(RouterLinkActive, { optional: true, host: true });

  get active(): boolean {
    return this.routerLinkActive?.isActive ?? false;
  }
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[appNavList]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'flex flex-col py-2',
  },
})
export class NavListDirective {}

export const NAV_LIST_DIRECTIVES = [NavListItemDirective, NavListDirective] as const;
