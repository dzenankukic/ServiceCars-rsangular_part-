import { Component } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carshopSPA';
  /**
   *
   */
  constructor(config: NgbNavConfig) {
    config.destroyOnHide = false;
    config.roles = false;
  }

}
