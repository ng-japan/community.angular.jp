import { Injectable } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';
import { State } from '../core/state';
import { LocalCommunityRepository } from './../repository/local-community.repository';

@Injectable({ providedIn: 'root' })
export class LocalCommunityService {
  constructor(private store: Store<State>, private localCommunityRepository: LocalCommunityRepository) {}

  async loadAll() {
    const communities = await this.localCommunityRepository.getAll();

    this.store.patch(state => ({
      ...state,
      localCommunities: {
        ...state.localCommunities,
        items: communities,
      },
    }));
  }
}
