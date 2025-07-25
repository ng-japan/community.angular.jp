import { provideServerRendering } from '@angular/ssr';
import { BEFORE_APP_SERIALIZED } from '@angular/platform-server';
import { ApplicationConfig, NgZone, inject, mergeApplicationConfig } from '@angular/core';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { setTimeout } from 'node:timers/promises';
import { firstValueFrom } from 'rxjs';
import { appConfig } from './app.config';
import { markdownPages } from './app.routes';
import { provideContentCache } from './shared/content-resolver';

function createContentCache() {
  const cache: Record<string, string> = {};
  for (const page of markdownPages) {
    const file = readFileSync(resolve('src', page.src), 'utf-8');
    cache[page.src] = file;
  }
  return cache;
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideContentCache(createContentCache()),
    {
      provide: BEFORE_APP_SERIALIZED,
      multi: true,
      useFactory: () => {
        const ngZone = inject(NgZone);
        return async () => {
          // wait for markdown-outlet rendering
          await setTimeout(1000);
          if (ngZone.isStable) {
            return;
          }
          await firstValueFrom(ngZone.onStable);
        };
      },
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
