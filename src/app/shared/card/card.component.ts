import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="h-full w-full bg-white rounded-md p-4 border border-gray-700 shadow">
      <div class="flex flex-row items-center justify-start text-lg gap-2 mb-4">
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
