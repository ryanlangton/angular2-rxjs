import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard'
import { HttpPromiseSortedComponent }     from './http-promise-sorted';
import { HttpRxjsSortedComponent }   from './http-rxjs-sorted';

const routes: RouterConfig = [
  { path: '',  component: DashboardComponent },
  { path: 'http-promise-sorted', component: HttpPromiseSortedComponent },
  { path: 'http-rxjs-sorted', component: HttpRxjsSortedComponent }
  ];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];