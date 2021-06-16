import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconBookComponent } from './icon-book/icon-book.component';
import { IconCalendarComponent } from './icon-calendar/icon-calendar.component';
import { IconExternalLinkComponent } from './icon-external-link/icon-external-link.component';
import { IconHomeComponent } from './icon-home/icon-home.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { IconOnlineComponent } from './icon-online/icon-online.component';
import { IconPeopleComponent } from './icon-people/icon-people.component';

@NgModule({
  declarations: [
    IconExternalLinkComponent,
    IconMenuComponent,
    IconPeopleComponent,
    IconCalendarComponent,
    IconOnlineComponent,
    IconBookComponent,
    IconHomeComponent,
  ],
  imports: [CommonModule],
  exports: [
    IconExternalLinkComponent,
    IconMenuComponent,
    IconPeopleComponent,
    IconCalendarComponent,
    IconOnlineComponent,
    IconBookComponent,
    IconHomeComponent,
  ],
})
export class IconsModule {}
