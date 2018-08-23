import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@lacolaco/ngx-store';
import { initialState } from '../../../initialState';
import { CommunitiesPageComponent } from './communities.component';
import { CommunitiesModule } from './communities.module';

describe('CommunitiesComponent', () => {
  let component: CommunitiesPageComponent;
  let fixture: ComponentFixture<CommunitiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommunitiesModule, StoreModule.forRoot(initialState)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
