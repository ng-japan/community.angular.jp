import { LocalCommunity } from './../core/model';
import { Injectable, NgZone } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';
import { State } from '../core/state';
import { LocalCommunityInfo } from '../view/element/local-community-info';
import { initialState } from '../initialState';

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
    this.mapRef = new google.maps.Map(containerElement, initialMapOptions);

    this.store.select(state => state.map.mapOptions).subscribe(mapOptions => {
      if (this.mapRef) {
        this.mapRef.setOptions(mapOptions);
      }
    });

    this.store.select(state => state.localCommunities.items).subscribe(communities => {
      this.resetMarkers(communities);
    });
  }

  resetMapOptions() {
    this.store.patch(state => ({
      ...state,
      map: {
        ...state.map,
        mapOptions: {
          ...initialState.map.mapOptions,
        },
      },
    }));
  }

  resetMarkers(communities: LocalCommunity[]) {
    this.markerRefs.forEach(marker => marker.setMap(null));

    this.markerRefs = communities.map(community => {
      const marker = new google.maps.Marker({
        title: community.name,
        position: community.location,
        icon: {
          url: community.logo,
          scaledSize: new google.maps.Size(32, 32),
        },
      });
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
    const infoWindow = new google.maps.InfoWindow({
      content: new LocalCommunityInfo(community),
    });
    infoWindow.open(marker.getMap(), marker);

    this.store.patch(state => ({
      ...state,
      map: {
        ...state.map,
        mapOptions: {
          ...state.map.mapOptions,
          center: community.location,
          zoom: 7,
        },
      },
    }));

    this.infoWindowRef = infoWindow;
  }
}
