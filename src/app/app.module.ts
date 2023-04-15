import { provideHttpClient } from '@angular/common/http';
import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { RendererModule } from '@nguniversal/common/clover';
import { routes } from './app-routing';
import { provideAppTitleStrategy } from './app-title-strategy';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
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
    importProvidersFrom(BrowserModule.withServerTransition({ appId: 'app' })),
    importProvidersFrom(RendererModule.forRoot()),
    importProvidersFrom(TransferHttpCacheModule),
  ],
})
export class AppModule {}
