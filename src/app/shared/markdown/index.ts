import { wrap } from 'comlink';

export async function processMarkdown(source: string): Promise<string> {
  const worker = wrap<typeof import('./markdown.worker').api>(
    new Worker(new URL('./markdown.worker', import.meta.url)),
  );
  return await worker.processMarkdown(source);
}
