import { LocalCommunity } from '../core/model';
import { LocalCommunityInfoElement } from '../view/element/local-community-info';

const ICON_SCALED_SIZE = new google.maps.Size(32, 32);

export const centerOfJapan: google.maps.LatLngLiteral = {
  lat: 37.6,
  lng: 135.2,
};

export const initialMapOptions: google.maps.MapOptions = {
  center: centerOfJapan,
  zoom: 6,
};

export const createMap = (containerElement: Element, options: google.maps.MapOptions) =>
  new google.maps.Map(containerElement, options);

export const createCommunityMarker = (community: LocalCommunity) =>
  new google.maps.Marker({
    title: community.name,
    position: community.location,
    icon: {
      url: community.logo,
      scaledSize: ICON_SCALED_SIZE,
    },
  });

export const createCommunityInfoWindow = (community: LocalCommunity) =>
  new google.maps.InfoWindow({
    content: new LocalCommunityInfoElement(community),
  });
