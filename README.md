# Angular2Rxjs

This project is set up to demonstrate how [Angular 2](http://angular.io) can use [RxJS](http://reactivex.io) for a [Functional Reactive Programming](https://en.wikipedia.org/wiki/Functional_reactive_programming) architecture.
Here are the [slides](https://docs.google.com/presentation/d/1IqAMShDwUIoU2vtue-7pF_zIGGtaQR1VFZIrs3UoW-I/edit?usp=sharing) for the talk that accompanies this project.

## Demos

* Http - Http.get demo.  Get's a list of demos from github.
* Wikipedia Search - Demo multiple observables interacting.  One from the form input (search) and one for the search request.
* Todo Custom - Demo simple todo component, passing events up through a child component (TodoList) and using a custom store.  
* Todo NgRx - Demo Reactive Extensions ngrx/store (Redux for Angular 2).
* Todo Firebase - Demo Firebase back end.
* Routing - Demo child component routing and how ActiveRoute Observable is used.

## Angular CLI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.8.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
