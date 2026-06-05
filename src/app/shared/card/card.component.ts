import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="h-full w-full bg-white rounded p-5 md:p-6 border border-line transition-colors hover:border-ink"
    >
      <div class="flex flex-row items-center justify-start font-display font-bold text-lg md:text-xl gap-2 mb-4">
        <ng-content select="[card-icon]" />
        <ng-content select="[card-title]" />
      </div>
      <div class="text-base">
        <ng-content />
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
