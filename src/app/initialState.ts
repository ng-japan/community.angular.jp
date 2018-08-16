import { State } from './core/state';

export const initialState: State = {
  map: {
    mapOptions: {
      // Show entire Japan
      center: {
        lat: 37.6,
        lng: 135.2,
      },
      zoom: 5,
    },
  },
  localCommunities: {
    items: [],
  },
};
