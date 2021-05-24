import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownOutletComponent } from './markdown-outlet.component';

describe('MarkdownOutletComponent', () => {
  let component: MarkdownOutletComponent;
  let fixture: ComponentFixture<MarkdownOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkdownOutletComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
