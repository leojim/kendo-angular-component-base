import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import {Component} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { KendoComponent } from '../src/kendo-component'

@Component({
  selector: 'my-app',
  template: `
  <kendo-angular-component>Component</kendo-angular-component>
  `,
  directives: [KendoComponent]
})
class AppComponent {

}


bootstrap(AppComponent);
