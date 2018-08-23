import { MapOptions, LocalCommunity } from './model';

export interface State {
  map: {
    mapOptions: MapOptions;
  };
  localCommunities: {
    fetching: number;
    items: LocalCommunity[];
  };
}
