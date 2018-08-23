import { Injectable } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';
import { State } from '../core/state';
import { setCommunities } from '../thunk/local-communities';
import { LocalCommunityRepository } from './../repository/local-community.repository';
import { finishFetchingLocalCommunities, startfetchingLocalCommunities } from './../thunk/local-communities';

@Injectable({ providedIn: 'root' })
export class LocalCommunityService {
  constructor(private store: Store<State>, private localCommunityRepository: LocalCommunityRepository) {}

  async loadAll() {
    this.store.patch(startfetchingLocalCommunities());

    try {
      const communities = await this.localCommunityRepository.getAll().toPromise();
      this.store.patch(setCommunities(communities));
    } finally {
      this.store.patch(finishFetchingLocalCommunities());
    }
  }
}
