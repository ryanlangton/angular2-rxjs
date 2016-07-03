import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard'
import { HttpPromiseComponent }     from './http-promise';
import { HttpRxjsComponent }   from './http-rxjs';

const routes: RouterConfig = [
  { path: '',  component: DashboardComponent },
  { path: 'http-promise', component: HttpPromiseComponent },
  { path: 'http-rxjs', component: HttpRxjsComponent }
  ];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];