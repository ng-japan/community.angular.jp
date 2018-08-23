import { address, company } from 'faker';
import { LocalCommunity } from '../../core/model';

export const createMockLocalCommunity = (override: Partial<LocalCommunity> = {}): LocalCommunity => ({
  name: company.companyName(),
  city: address.city(),
  url: '',
  logo: '',
  location: {
    lat: parseFloat(address.latitude()),
    lng: parseFloat(address.longitude()),
  },
  ...override,
});
