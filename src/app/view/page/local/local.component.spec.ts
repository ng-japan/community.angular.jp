import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocalPageComponent } from './local.component';

describe('LocalComponent', () => {
  let component: LocalPageComponent;
  let fixture: ComponentFixture<LocalPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LocalPageComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
