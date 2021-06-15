import { wrap } from 'comlink';

type MarkdownWorker = typeof import('./markdown.worker').api;

let worker: MarkdownWorker;

export async function processMarkdown(source: string): Promise<string> {
  if (worker == null) {
    if (window.Worker) {
      worker = wrap<MarkdownWorker>(new Worker(new URL('./markdown.worker', import.meta.url)));
    } else {
      worker = await import('./markdown.worker').then((m) => m.api);
    }
  }
  return await worker.processMarkdown(source);
}
