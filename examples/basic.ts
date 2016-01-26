import 'reflect-metadata'
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import Button from '../src/button'

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 Ap <kendo-button>Button</kendo-button></h1>',
  directives: [Button]
})
class AppComponent {

}


bootstrap(AppComponent);
