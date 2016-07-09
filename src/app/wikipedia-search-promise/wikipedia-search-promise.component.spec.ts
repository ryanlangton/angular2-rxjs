/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { WikipediaSearchPromiseComponent } from './wikipedia-search-promise.component';

describe('Component: WikipediaSearchPromise', () => {
  it('should create an instance', () => {
    let component = new WikipediaSearchPromiseComponent();
    expect(component).toBeTruthy();
  });
});
