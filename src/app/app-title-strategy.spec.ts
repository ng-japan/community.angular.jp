import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideAppTitleStrategy } from './app-title-strategy';

describe('AppTitleStrategy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'b',
            component: TestPageComponent,
            title: 'pageB',
          },
          {
            path: 'c',
            component: TestPageComponent,
          },
        ]),
      ],
      providers: [provideAppTitleStrategy('baseTitle')],
    });
  });

  it('should emit page title by using route data', async () => {
    const router = TestBed.inject(Router);

    await router.navigate(['/b']);
    expect(document.title).toBe('pageB | baseTitle');
  });

  it('should emit the default title when page does not have title', async () => {
    const router = TestBed.inject(Router);

    await router.navigate(['/c']);
    expect(document.title).toBe('baseTitle');
  });
});

@Component({
  template: '',
  standalone: false,
})
class TestPageComponent {}
