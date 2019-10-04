import { Component, ChangeDetectionStrategy } from '@angular/core';
import { members } from '../../../data/members.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  readonly members = members;
}
