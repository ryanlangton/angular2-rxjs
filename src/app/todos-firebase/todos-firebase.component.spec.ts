/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TodosFirebaseComponent } from './todos-firebase.component';

describe('Component: TodosFirebase', () => {
  it('should create an instance', () => {
    let component = new TodosFirebaseComponent();
    expect(component).toBeTruthy();
  });
});
