import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard'
import { HttpStartComponent } from './http-start';
import { HttpFinishComponent } from './http-finish';
import { WikipediaSearchStartComponent } from './wikipedia-search-start';
import { WikipediaSearchFinishComponent } from './wikipedia-search-finish';
import { TodosComponent } from './todos';
import { TodosFirebaseComponent } from './todos-firebase';
import { TodosNgrxComponent } from './todos-ngrx';

const routes: RouterConfig = [
  { path: '',  component: DashboardComponent },
  { path: 'http-start', component: HttpStartComponent },
  { path: 'http-finish', component: HttpFinishComponent },
  { path: 'wikipedia-search-start', component: WikipediaSearchStartComponent },
  { path: 'wikipedia-search-finish', component: WikipediaSearchFinishComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos-ngrx', component: TodosNgrxComponent },
  { path: 'todos-firebase', component: TodosFirebaseComponent }
  ];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];