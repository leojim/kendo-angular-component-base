import 'reflect-metadata'
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import KendoComponent from '../src/kendo-component'

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
