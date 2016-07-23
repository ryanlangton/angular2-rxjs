/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EmptyComponent } from './empty.component';

describe('Component: Empty', () => {
  it('should create an instance', () => {
    let component = new EmptyComponent();
    expect(component).toBeTruthy();
  });
});
