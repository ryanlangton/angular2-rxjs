import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { provideStore } from '@ngrx/store';
import { todosReducer } from './app/reducers';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  MdIconRegistry,
  HTTP_PROVIDERS,
  JSONP_PROVIDERS,
  provideStore({ todos: todosReducer }),
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyD_0dLWRMeGzkZhnFiDtHmCEgSydqLvRVQ",
    authDomain: "todos-fcdf8.firebaseapp.com",
    databaseURL: "https://todos-fcdf8.firebaseio.com",
    storageBucket: "todos-fcdf8.appspot.com",
  })]);
