import { State } from '../core/state';
import { initialState } from '../initialState';

export const resetMapOptions = () => (state: State): State => {
  return {
    ...state,
    map: {
      ...state.map,
      mapOptions: {
        ...initialState.map.mapOptions,
      },
    },
  };
};

export const setCenter = (center: google.maps.LatLngLiteral) => (state: State): State => {
  return {
    ...state,
    map: {
      ...state.map,
      mapOptions: {
        ...state.map.mapOptions,
        center: center,
      },
    },
  };
};
