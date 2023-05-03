import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { BEFORE_APP_SERIALIZED, provideServerRendering } from '@angular/platform-server';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { setTimeout } from 'node:timers/promises';
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
      // wait for markdown-outlet rendering
      useFactory: () => () => setTimeout(1000),
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
