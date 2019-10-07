import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalPageComponent } from './local.component';

describe('LocalComponent', () => {
  let component: LocalPageComponent;
  let fixture: ComponentFixture<LocalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocalPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
