import { MapOptions, LocalCommunity } from './model';

export interface State {
  map: {
    mapOptions: MapOptions;
  };
  localCommunities: {
    items: LocalCommunity[];
  };
}
