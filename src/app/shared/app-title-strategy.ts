import { inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

const APP_TITLE = new InjectionToken<string>('appTitle');

export const provideAppTitleStrategy = (appTitle: string): Provider[] => [
  { provide: APP_TITLE, useValue: appTitle },
  { provide: TitleStrategy, useClass: AppTitleStrategy },
];

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly appTitle = inject(APP_TITLE);

  override updateTitle(routerState: RouterStateSnapshot) {
    const pageTitle = this.buildTitle(routerState);
    this.title.setTitle(pageTitle ? `${pageTitle} | ${this.appTitle}` : this.appTitle);
  }
}
