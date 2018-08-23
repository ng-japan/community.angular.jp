import { LocalCommunity } from './../core/model';
import { State } from '../core/state';

export const startfetchingLocalCommunities = () => (state: State): State => {
  return {
    ...state,
    localCommunities: {
      ...state.localCommunities,
      fetching: state.localCommunities.fetching + 1,
    },
  };
};
export const finishFetchingLocalCommunities = () => (state: State): State => {
  return {
    ...state,
    localCommunities: {
      ...state.localCommunities,
      fetching: state.localCommunities.fetching - 1,
    },
  };
};

export const setCommunities = (communities: LocalCommunity[]) => (state: State): State => {
  return {
    ...state,
    localCommunities: {
      ...state.localCommunities,
      items: communities,
    },
  };
};
