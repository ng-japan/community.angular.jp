import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
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
  providers: [provideServerRendering(), provideContentCache(createContentCache())],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
