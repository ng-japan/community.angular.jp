import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListDirective } from './nav-list';

describe('NavListComponent', () => {
  let component: NavListDirective;
  let fixture: ComponentFixture<NavListDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavListDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
