/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { WikipediaSearchFinishComponent } from './wikipedia-search-finish.component';

describe('Component: WikipediaSearchFinishComponent', () => {
//   var mockJsonp;

  beforeEach('', () => {
    //   mockJsonp = new MockJsonp();
  })

  it('should create an instance', () => {
    let mockJsonp = new MockJsonp();
    let component = new WikipediaSearchFinishComponent(mockJsonp);
    expect(component).toBeTruthy();
  });
});

class MockJsonp extends Jsonp {
    constructor(){
        super(null, null)
    }

    get() { 
        return Observable.create(['car', 'cars'])
    }
    put() { return Observable.create([])}
    delete() { return Observable.create([])}
}

