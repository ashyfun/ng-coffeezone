import { Component } from '@angular/core';

@Component({
  selector: 'cz-root',
  template: `
    <div class="uk-container">
      <div class="uk-section uk-section-default">
        <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s" uk-grid>
          <div>
            <cz-cafe [cafe]="cafe"></cz-cafe>
          </div>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cafe = {
    title: 'Title',
    topics: 'Topics',
    address: 'Address'
  }
}
