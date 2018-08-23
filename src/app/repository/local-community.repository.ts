import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalCommunity } from './../core/model';

@Injectable({ providedIn: 'root' })
export class LocalCommunityRepository {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<LocalCommunity[]>('/assets/data/communities.json');
  }
}
