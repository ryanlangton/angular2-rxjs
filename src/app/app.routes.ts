import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard'
import { HttpPromiseComponent } from './http-promise';
import { HttpRxjsComponent } from './http-rxjs';
import { WikipediaSearchPromiseComponent } from './wikipedia-search-promise';
import { WikipediaSearchRxjsComponent } from './wikipedia-search-rxjs';

const routes: RouterConfig = [
  { path: '',  component: DashboardComponent },
  { path: 'http-promise', component: HttpPromiseComponent },
  { path: 'http-rxjs', component: HttpRxjsComponent },
  { path: 'wikipedia-search-promise', component: WikipediaSearchPromiseComponent },
  { path: 'wikipedia-search-rxjs', component: WikipediaSearchRxjsComponent }
  ];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];