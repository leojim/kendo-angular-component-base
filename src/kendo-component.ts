import * as styles from '@telerik/kendo-theme-default/styles/example/main';
import { Component } from '@angular/core';
import util from "./util";
import subUtil from "./sub/util";

@Component({
  selector: 'kendo-angular-component',
  template: `<div class="${styles.example}">A Kendo UI angular component ${util} ${subUtil}</div>`
})
export class KendoComponent {

}
