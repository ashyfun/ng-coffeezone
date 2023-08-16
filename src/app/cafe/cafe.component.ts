import { Component, Input } from '@angular/core';
import { Cafe } from '../cafe.iface';

@Component({
  selector: 'cz-cafe',
  template: `
    <div class="uk-card uk-card-default">
      <div class="uk-card-header">
        <h3 class="uk-card-title uk-margin-remove-bottom">{{ cafe.title }}</h3>
        <p class="uk-text-meta uk-margin-remove-top">{{ cafe.topics }}</p>
      </div>
      <div class="uk-card-body">
        <p>{{ cafe.location?.address }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent {
  @Input() cafe!: Cafe
}
