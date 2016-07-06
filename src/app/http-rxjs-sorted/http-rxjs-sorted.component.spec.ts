/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HttpRxjsSortedComponent } from './http-rxjs-sorted.component';

describe('Component: HttpRxjs', () => {
  it('should create an instance', () => {
    let component = new HttpRxjsSortedComponent(null);
    expect(component).toBeTruthy();
  });
});
