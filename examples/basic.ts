import 'reflect-metadata'
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import KendoComponent from '../src/kendo-component'

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 Ap <kendo-component>Component</kendo-component></h1>',
  directives: [KendoComponent]
})
class AppComponent {

}


bootstrap(AppComponent);
