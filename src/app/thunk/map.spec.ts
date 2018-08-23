import { Store } from '@lacolaco/reactive-store';
import { State } from '../core/state';
import { initialState } from '../initialState';
import { initialMapOptions } from '../util/local-community-map';
import { resetMapOptions, setCenter } from './map';

describe('thunk.map', () => {
  it('resetMapOptions', () => {
    const store = new Store<State>({
      ...initialState,
      map: {
        ...initialState.map,
        mapOptions: {
          center: {
            lat: 100,
            lng: 100,
          },
          zoom: 10,
        },
      },
    });
    store.patch(resetMapOptions());
    expect(store.value.map.mapOptions).toEqual(initialMapOptions);
  });

  it('setCenter', () => {
    const store = new Store<State>({
      ...initialState,
      map: {
        ...initialState.map,
        mapOptions: {
          ...initialState.map.mapOptions,
          center: {
            lat: 100,
            lng: 100,
          },
          zoom: 10,
        },
      },
    });

    store.patch(setCenter({ lat: 50, lng: 50 }));
    expect(store.value.map.mapOptions.center).toEqual({ lat: 50, lng: 50 });
    expect(store.value.map.mapOptions.zoom).toEqual(10);
  });
});
