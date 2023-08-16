import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Cafe } from './cafe.iface';

@Component({
  selector: 'cz-root',
  template: `
    <div class="uk-container">
      <div class="uk-section uk-section-default">
        <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-4@m uk-child-width-1-2@s" uk-grid>
          <div *ngFor="let item of items">
            <cz-cafe [cafe]="item"></cz-cafe>
          </div>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [RestService]
})
export class AppComponent {
  items: Cafe[] = [];

  constructor(private rest: RestService) { }

  async ngOnInit() {
    this.items = await this.rest.getCafes();
  }
}
