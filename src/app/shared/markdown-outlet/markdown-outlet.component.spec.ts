import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownOutletComponent } from './markdown-outlet.component';
import { inputBinding, signal } from '@angular/core';

describe('MarkdownOutletComponent', () => {
  let component: MarkdownOutletComponent;
  let fixture: ComponentFixture<MarkdownOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownOutletComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownOutletComponent, {
      bindings: [inputBinding('content', signal('## Test Markdown Content'))],
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
