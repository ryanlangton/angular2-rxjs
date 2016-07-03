/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: Angular2Rxjs', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Reactive programming with Angular2 and RxJS\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('Reactive programming with Angular2 and RxJS');
  }));
});
