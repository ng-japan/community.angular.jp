import { By } from '@angular/platform-browser';
import { RouterLinkActive } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { render } from '@testing-library/angular';
import { NavListDirective, NavListItemDirective } from './nav-list';

describe('NavListDirective', () => {
  it('should render', async () => {
    const { getByRole } = await render(`<div appNavList ></div>`, {
      declarations: [NavListDirective],
    });
    expect(getByRole('list')).toHaveClass('flex flex-col py-2');
  });
});

describe('NavListItemDirective', () => {
  it('should render', async () => {
    const { getByRole } = await render(`<div appNavListItem ></div>`, {
      declarations: [NavListItemDirective],
    });
    expect(getByRole('listitem')).toHaveClass(
      'flex items-center gap-2 h-12 px-4 no-underline text-black hover:bg-gray-100',
    );
  });

  it('should change background color if active', async () => {
    const {
      getByRole,
      detectChanges,
      fixture: { debugElement },
    } = await render(`<div appNavListItem routerLink routerLinkActive></div>`, {
      declarations: [NavListItemDirective],
      imports: [RouterTestingModule],
    });
    const rla = debugElement.query(By.directive(RouterLinkActive)).injector.get(RouterLinkActive);
    (rla as any).isActive = true;
    detectChanges();

    expect(getByRole('listitem')).toHaveClass('bg-gray-100');
  });
});
