import { startfetchingLocalCommunities, finishFetchingLocalCommunities, setCommunities } from './local-communities';
import { Store } from '@lacolaco/reactive-store';
import { State } from '../core/state';
import { initialState } from '../initialState';
import { createMockLocalCommunity } from '../util/testing/create-mock';

describe('thunk.local-communities', () => {
  it('startfetchingLocalCommunities', () => {
    const store = new Store<State>({
      ...initialState,
      localCommunities: {
        ...initialState.localCommunities,
        fetching: 0,
      },
    });
    store.patch(startfetchingLocalCommunities());
    expect(store.value.localCommunities.fetching).toEqual(1);
  });

  it('finishFetchingLocalCommunities', () => {
    const store = new Store<State>({
      ...initialState,
      localCommunities: {
        ...initialState.localCommunities,
        fetching: 1,
      },
    });
    store.patch(finishFetchingLocalCommunities());
    expect(store.value.localCommunities.fetching).toEqual(0);
  });

  it('setCommunities', () => {
    const store = new Store<State>({
      ...initialState,
      localCommunities: {
        ...initialState.localCommunities,
        items: [],
      },
    });
    store.patch(setCommunities([createMockLocalCommunity()]));
    expect(store.value.localCommunities.items.length).toEqual(1);
  });
});
