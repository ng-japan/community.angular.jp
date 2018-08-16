export type MapOptions = google.maps.MapOptions;

export interface LocalCommunity {
  name: string;
  city: string;
  url: string;
  logo: string;
  location: google.maps.LatLngLiteral;
}
