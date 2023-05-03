import { provideHttpClient } from '@angular/common/http';
import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app-routing';
import { provideAppTitleStrategy } from './app-title-strategy';
import { AppComponent } from './app.component';
import { ICON_COMPONENTS } from './shared/icons';
import { NAV_LIST_DIRECTIVES } from './shared/nav-list/nav-list';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, NAV_LIST_DIRECTIVES, ICON_COMPONENTS],
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
    ),
    provideAppTitleStrategy('Angular Japan User Group'),
  ],
})
export class AppModule {}
