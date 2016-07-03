/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HttpRxjsComponent } from './http-rxjs.component';

describe('Component: HttpRxjs', () => {
  it('should create an instance', () => {
    let component = new HttpRxjsComponent();
    expect(component).toBeTruthy();
  });
});
