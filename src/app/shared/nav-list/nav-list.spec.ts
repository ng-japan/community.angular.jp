import { By } from '@angular/platform-browser';
import { RouterLinkActive } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { render } from '@testing-library/angular';
import { NavListDirective, NavListItemDirective } from './nav-list';

describe('NavListDirective', () => {
  it('should render', async () => {
    const { getByTestId } = await render(`<div appNavList data-testid="TEST"></div>`, {
      imports: [NavListDirective],
    });
    expect(getByTestId('TEST')).toHaveClassName('flex', 'flex-col', 'py-2');
  });
});

describe('NavListItemDirective', () => {
  it('should render', async () => {
    const { getByTestId } = await render(`<div appNavListItem data-testid="TEST"></div>`, {
      imports: [NavListItemDirective],
    });
    expect(getByTestId('TEST')).toHaveClassName(
      'flex',
      'items-center',
      'h-12',
      'px-4',
      'no-underline',
      'text-black',
      'hover:bg-gray-100',
    );
  });

  it('should change background color if active', async () => {
    const { getByTestId, detectChanges } = await render(
      `<div appNavListItem data-testid="TEST" routerLink routerLinkActive></div>`,
      {
        imports: [RouterTestingModule, NavListItemDirective],
        componentProviders: [
          {
            provide: RouterLinkActive,
            useValue: {
              isActive: true,
            },
          },
        ],
      },
    );
    detectChanges();
    expect(getByTestId('TEST')).toHaveClassName('bg-gray-100');
  });
});
