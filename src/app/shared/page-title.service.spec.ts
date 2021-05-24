import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PageTitleService } from './page-title.service';

describe('PageTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'b',
            component: TestPageComponent,
            data: {
              documentTitle: 'pageB',
            },
          },
          {
            path: 'c',
            component: TestPageComponent,
          },
        ]),
      ],
      providers: [PageTitleService],
    });
  });

  it('should emit page title by using route data', async () => {
    const service = TestBed.inject(PageTitleService);
    const router = TestBed.inject(Router);

    service.titleChange$.subscribe((pageTitle) => {
      expect(pageTitle).toBe('pageB | Angular Japan User Group');
    });

    await router.navigate(['/b']);
  });

  it('should emit the default title when page does not have title', async () => {
    const service = TestBed.inject(PageTitleService);
    const router = TestBed.inject(Router);

    service.titleChange$.subscribe((pageTitle) => {
      expect(pageTitle).toBe('Angular Japan User Group');
    });

    await router.navigate(['/c']);
  });
});

@Component({ template: '' })
class TestPageComponent {}
