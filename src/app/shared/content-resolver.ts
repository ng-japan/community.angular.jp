import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, InjectionToken, inject, makeEnvironmentProviders } from '@angular/core';
import { firstValueFrom } from 'rxjs';

const CONTENT_CACHE = new InjectionToken<Record<string, string>>('CONTENT_CACHE');

export function provideContentCache(value: Record<string, string>) {
  return makeEnvironmentProviders([
    {
      provide: CONTENT_CACHE,
      useValue: value,
    },
  ]);
}

@Injectable({ providedIn: 'root' })
export class ContentResolver {
  readonly #httpClient = inject(HttpClient);
  readonly #contentCache = inject(CONTENT_CACHE, { optional: true });

  async get(url: string) {
    if (this.#contentCache && this.#contentCache[url]) {
      return this.#contentCache[url];
    }

    const content = await firstValueFrom(this.#httpClient.get(url, { responseType: 'text' })).catch(
      (e: HttpErrorResponse) => `${e.message}`,
    );
    return content;
  }
}
