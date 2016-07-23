import {RouterConfig} from '@angular/router';
import {RoutingChildComponent} from './routing-child';
import {RoutingComponent} from './routing-parent';
import {EmptyComponent} from './../empty';

export const routingDemoRoutes: RouterConfig = [
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: '', component: EmptyComponent },
      { path: ':id', component: RoutingChildComponent }
    ]
  }
];