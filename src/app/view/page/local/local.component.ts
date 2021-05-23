import { Component, ChangeDetectionStrategy } from '@angular/core';

import { localCommunities } from '../../../data/communities.data';

@Component({
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalPageComponent {
  readonly localCommunityList = localCommunities;
}
