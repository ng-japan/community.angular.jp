import { RenderMode, ServerRoute } from '@angular/ssr';

export const routes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender },
];
