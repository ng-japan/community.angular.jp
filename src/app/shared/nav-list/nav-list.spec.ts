import { By } from '@angular/platform-browser';
import { RouterLinkActive } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { render } from '@testing-library/angular';
import { NavListDirective, NavListItemDirective } from './nav-list';

describe('NavListDirective', () => {
  it('should render', async () => {
    const { getByTestId } = await render(`<div appNavList data-testid="TEST"></div>`, {
      declarations: [NavListDirective],
    });
    expect(getByTestId('TEST')).toHaveClass('flex flex-col py-2');
  });
});

describe('NavListItemDirective', () => {
  it('should render', async () => {
    const { getByTestId } = await render(`<div appNavListItem data-testid="TEST"></div>`, {
      declarations: [NavListItemDirective],
    });
    expect(getByTestId('TEST')).toHaveClass('flex items-center h-12 px-4 no-underline text-black hover:bg-gray-100');
  });

  it('should change background color if active', async () => {
    const {
      getByTestId,
      detectChanges,
      fixture: { debugElement },
    } = await render(`<div appNavListItem data-testid="TEST" routerLink routerLinkActive></div>`, {
      declarations: [NavListItemDirective],
      imports: [RouterTestingModule],
    });
    const rla = debugElement.query(By.directive(RouterLinkActive)).injector.get(RouterLinkActive);
    (rla as any).isActive = true;
    detectChanges();

    expect(getByTestId('TEST')).toHaveClass('bg-gray-100');
  });
});
