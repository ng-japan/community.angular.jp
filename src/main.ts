import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { provideAppTitleStrategy } from './app/app-title-strategy';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule.withServerTransition({ appId: 'app' })),
    importProvidersFrom(RendererModule.forRoot()),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TransferHttpCacheModule),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
    ),
    provideAppTitleStrategy('Angular Japan User Group'),
  ],
}).catch((err) => console.log(err));
