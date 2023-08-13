import { Component, Input } from '@angular/core';

interface Cafe {
  title: string
  topics: string
  address: string
}

@Component({
  selector: 'cz-cafe',
  template: `
    <div class="uk-card uk-card-default">
      <div class="uk-card-header">
        <h3 class="uk-card-title uk-margin-remove-bottom">{{ cafe.title }}</h3>
        <p class="uk-text-meta uk-margin-remove-top">{{ cafe.topics }}</p>
      </div>
      <div class="uk-card-body">
        <p>{{ cafe.address }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent {
  @Input() cafe!: Cafe
}
