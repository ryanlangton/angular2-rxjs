/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HttpPromiseComponent } from './http-promise.component';

describe('Component: HttpPromise', () => {
  it('should create an instance', () => {
    let component = new HttpPromiseComponent(null);
    expect(component).toBeTruthy();
  });
});
