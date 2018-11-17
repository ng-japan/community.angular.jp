import { Injectable, NgZone } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';
import { State } from '../core/state';
import { resetMapOptions, setCenter } from '../thunk/map';
import { createCommunityInfoWindow, createCommunityMarker, createMap } from '../util/local-community-map';
import { LocalCommunity } from './../core/model';

@Injectable({
  providedIn: 'root',
})
export class LocalCommunityMapService {
  private mapRef: google.maps.Map | null = null;
  private markerRefs: google.maps.Marker[] = [];
  private infoWindowRef: google.maps.InfoWindow | null = null;

  private localCommunityMarkerMap = new WeakMap<LocalCommunity, google.maps.Marker>();

  constructor(private store: Store<State>, private ngZone: NgZone) {}

  initialize(containerElement: Element) {
    const initialMapOptions = this.store.value.map.mapOptions;
    this.mapRef = createMap(containerElement, initialMapOptions);

    this.store
      .select(state => state.map.mapOptions)
      .subscribe(mapOptions => {
        if (this.mapRef) {
          this.mapRef.setOptions(mapOptions);
        }
      });

    this.store
      .select(state => state.localCommunities.items)
      .subscribe(communities => {
        this.resetMarkers(communities);
      });
  }

  resetMapOptions() {
    this.store.patch(resetMapOptions());
  }

  resetMarkers(communities: LocalCommunity[]) {
    this.markerRefs.forEach(marker => marker.setMap(null));

    this.markerRefs = communities.map(community => {
      const marker = createCommunityMarker(community);
      marker.addListener('click', () =>
        this.ngZone.run(() => {
          this.selectCommunity(community);
        }),
      );
      this.localCommunityMarkerMap.set(community, marker);
      marker.setMap(this.mapRef);
      return marker;
    });
  }

  selectCommunity(community: LocalCommunity) {
    if (this.infoWindowRef) {
      this.infoWindowRef.close();
    }

    const marker = this.localCommunityMarkerMap.get(community);
    if (!marker) {
      return;
    }
    const infoWindow = createCommunityInfoWindow(community);
    infoWindow.open(marker.getMap(), marker);

    this.store.patch(setCenter(community.location));

    this.infoWindowRef = infoWindow;
  }
}
