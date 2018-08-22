import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';
import { LocalCommunity } from '../../../core/model';
import { State } from '../../../core/state';
import { LocalCommunityMapService } from '../../../service/local-community-map.service';
import { LocalCommunityService } from '../../../service/local-community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunitiesPageComponent implements OnInit, AfterViewInit {
  localCommunities$ = this.store.select(state => state.localCommunities.items);

  @ViewChild('mapContainer')
  mapContainer!: ElementRef;

  constructor(
    private store: Store<State>,
    private localCommunityService: LocalCommunityService,
    private mapService: LocalCommunityMapService,
  ) {}

  ngOnInit() {
    this.localCommunityService.loadAll();
  }

  ngAfterViewInit() {
    this.mapService.initialize(this.mapContainer.nativeElement);
  }

  selectCommunity(community: LocalCommunity) {
    this.mapService.selectCommunity(community);
  }

  resetMap() {
    this.mapService.resetMapOptions();
  }
}
