import { html, render } from 'lit-html';
import { LocalCommunity } from './../../core/model';

const template = (localCommunity: LocalCommunity) => html`
<style>
.root {
  padding: 4px;
  display: grid;
  grid-template-rows: "auto auto";
  grid-row-gap: 8px;
  justify-items: center;
}
.community-url {
  font-size: 16px;
  font-weight: bold;
}
</style>
<div class="root">
  <a class="community-url" href="${localCommunity.url}" target="_blank">${localCommunity.name}</a>
</div>
`;

export class LocalCommunityInfo extends HTMLElement {
  constructor(localCommunity: LocalCommunity) {
    super();
    const root = this.attachShadow({ mode: 'open' });

    render(template(localCommunity), root);
  }
}
