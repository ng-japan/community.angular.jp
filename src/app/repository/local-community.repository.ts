import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalCommunity } from './../core/model';

@Injectable({ providedIn: 'root' })
export class LocalCommunityRepository {
  constructor(private http: HttpClient) {}

  async getAll() {
    return await this.http.get<LocalCommunity[]>('/assets/data/communities.json').toPromise();
  }
}
