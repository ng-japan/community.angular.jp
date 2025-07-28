import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContentResolver {
  readonly #httpClient = inject(HttpClient);
  readonly #contentCache: Record<string, string> = {};

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
