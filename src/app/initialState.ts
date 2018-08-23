import { State } from './core/state';
import { initialMapOptions } from './util/local-community-map';

export const initialState: State = {
  map: {
    mapOptions: initialMapOptions,
  },
  localCommunities: {
    fetching: 0,
    items: [],
  },
};
