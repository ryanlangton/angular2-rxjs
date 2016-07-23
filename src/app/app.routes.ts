import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard'
import { HttpStartComponent } from './http-start';
import { HttpFinishComponent } from './http-finish';
import { WikipediaSearchStartComponent } from './wikipedia-search-start';
import { WikipediaSearchFinishComponent } from './wikipedia-search-finish';
import { TodosCustomPageComponent } from './todos-custom-page';
import { TodosFirebasePageComponent } from './todos-firebase-page';
import { TodosNgrxPageComponent } from './todos-ngrx-page';

const routes: RouterConfig = [
  { path: '',  component: DashboardComponent },
  { path: 'http-start', component: HttpStartComponent },
  { path: 'http-finish', component: HttpFinishComponent },
  { path: 'wikipedia-search-start', component: WikipediaSearchStartComponent },
  { path: 'wikipedia-search-finish', component: WikipediaSearchFinishComponent },
  { path: 'todos-custom', component: TodosCustomPageComponent },
  { path: 'todos-ngrx', component: TodosNgrxPageComponent },
  { path: 'todos-firebase', component: TodosFirebasePageComponent }
  ];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];