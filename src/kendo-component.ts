import * as styles from '@telerik/kendo-theme-default/styles/main';
import {Component} from 'angular2/core';
import util from "./util";

@Component({
  selector: 'kendo-angular-component',
  template: `<div class="${styles.componentClass}">A Kendo UI angular component ${util} </div>`
})
export default class KendoComponent {

}
