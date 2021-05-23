import * as remark from 'remark';
import * as html from 'remark-html';
import { expose } from 'comlink';

export const api = {
  async processMarkdown(source: string): Promise<string> {
    return remark()
      .use(html, {
        handlers: {
          link: (h, node) => {
            const { url, children } = node as unknown as { url: string; children: any[] };
            const props = url.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {};
            return h(node, 'a', { href: url, ...props }, children);
          },
        },
      })
      .process(source)
      .then((result) => result.toString());
  },
};

expose(api);
