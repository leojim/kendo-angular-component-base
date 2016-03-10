import * as styles from '@telerik/kendo-theme-default/styles/example/main';
import {Component} from 'angular2/core';
import util from "./util";

@Component({
  selector: 'kendo-angular-component',
  template: `<div class="${styles.example}">A Kendo UI angular component ${util} </div>`
})
export default class KendoComponent {

}
