import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

// Load the implementations that should be tested
import KendoAngularComponent from '../src/kendo-component';

describe('kendo-angular-component', () => {
  // Create a test component to test directives
  @Component({
    template: '',
    directives: [ KendoAngularComponent ]
  })
  class TestComponent {}

  it('should render a div with a componentClass', injectAsync([TestComponentBuilder], (tcb) => {

    return tcb.overrideTemplate(TestComponent, '<kendo-angular-component />')
      .createAsync(TestComponent).then((fixture: any) => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement.children[0];
        expect(compiled.className).toBe('componentClass');
      });
  }));

});
