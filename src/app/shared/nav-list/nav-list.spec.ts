import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { render } from '@testing-library/angular';
import { NavListDirective, NavListItemDirective } from './nav-list';

@Component({ template: '' })
class TestComponent {}

describe('NavListDirective', () => {
  it('should render', async () => {
    const { getByTestId } = await render(`<div appNavList data-testid="TEST"></div>`, {
      imports: [NavListDirective],
    });
    expect(getByTestId('TEST')).toHaveClassName('flex', 'flex-col', 'py-2');
  });
});

describe('NavListItemDirective', () => {
  it('should render with muted/transparent classes when inactive', async () => {
    const { getByTestId } = await render(`<div appNavListItem data-testid="TEST"></div>`, {
      imports: [NavListItemDirective],
    });
    expect(getByTestId('TEST')).toHaveClassName(
      'flex',
      'items-center',
      'h-12',
      'px-4',
      'no-underline',
      'font-display',
      'transition-colors',
      'border-l-2',
      'text-muted',
      'border-transparent',
    );
  });

  it('should resolve to ink color, brand-1 border and aria-current when route is active', async () => {
    const { getByTestId, detectChanges } = await render(
      `<div appNavListItem data-testid="TEST" routerLink="/active" routerLinkActive></div>`,
      {
        imports: [NavListItemDirective, RouterLink, RouterLinkActive],
        providers: [provideRouter([{ path: 'active', component: TestComponent }])],
      },
    );

    const router = TestBed.inject(Router);
    await router.navigate(['/active']);

    detectChanges();

    const el = getByTestId('TEST');
    expect(el).toHaveClassName('text-ink', 'font-semibold', 'border-brand-1');
    expect(el).not.toHaveClassName('text-muted');
    expect(el).not.toHaveClassName('border-transparent');
    expect(el).toHaveAttribute('aria-current', 'page');
  });
});
