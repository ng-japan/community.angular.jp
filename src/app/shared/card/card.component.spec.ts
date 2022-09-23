import { render, screen } from '@testing-library/angular';
import { IconPeopleComponent } from '../icons/icon-people/icon-people.component';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  it('should render content', async () => {
    await render(`<app-card> test content </app-card>`, {
      imports: [CardComponent],
    });
    expect(screen.getByText('test content')).toBeInTheDocument();
  });

  it('should render title', async () => {
    await render(
      `
      <app-card>
        <span card-title data-testid="title"> test title </span>
        test content 
      </app-card>`,
      {
        imports: [CardComponent],
      },
    );
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });

  it('should render icon', async () => {
    await render(
      `
      <app-card>
        <app-icon-people card-icon data-testid="icon"></app-icon-people>
        test content 
      </app-card>`,
      {
        imports: [CardComponent, IconPeopleComponent],
      },
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
