import {
    it,
    inject,
    describe,
    async,
    TestComponentBuilder
  //  beforeEachProviders,
} from '@angular/core/testing';

import { Component } from '@angular/core';
//import {BaseRequestOptions, Http} from '@angular/http';
//import {MockBackend} from '@angular/http/testing';

// Load the implementations that should be tested
import { KendoComponent } from '../src/kendo-component';

describe('kendo-angular-component', () => {
    // Create a test component to test directives
    @Component({
        directives: [ KendoComponent ],
        template: ''
    })
    class TestComponent {}

    it('should render a div', async(inject([TestComponentBuilder], (tcb: any) => {
        return tcb.overrideTemplate(TestComponent, '<kendo-angular-component></kendo-angular-component>')
            .createAsync(TestComponent).then((fixture: any) => {
                fixture.detectChanges();
                let compiled: any = fixture.debugElement.nativeElement.children[0].children[0];
                expect(compiled.tagName).toBe('DIV');
            });
    })));

});
