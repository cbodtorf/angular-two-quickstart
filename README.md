# ANGULAR 2 quickstart
### from official doc tutorial
------------------------------
- __package.json__ identifies npm package dependencies for the project.
- __tsconfig.json__ defines how the TypeScript compiler generates JavaScript from the project's files.
- __typings.json__ provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
- __systemjs.config.js__ provides information to a module loader about where to find application modules, and registers all the necessary packages. It also contains other packages that will be needed by later documentation examples.

### installs:
1. npm install
2. (if typings folder doesnt show up) npm run typings install
-----------------------------
### Module
- import NgModule and BrowserModule from angular/ core and platform-browser
- might also import FormsModule, RouteModule, and HttpModule

### Component
- import Component from angular/core
- the @Component decorator associates metadata with AppComponent component class.
  - the selector specifies a simple css selector for an html element
  - the template describes how to render the component's view
- *** Don't forget to import your new component in the Module [declarations and bootstrap ]

------------------------------

### Start Application
1. create 'app/main.ts'.
2. import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
3. import your AppModule from './app.module'
4. assign platformBrowserDynamic() function to a variable.
5. now call your module as a parameter: platform.bootstrapModule(AppModule);
------------------------------

### Define the webpage (index.html) that hosts the app
- lives in the root
- JavaScript libraries: core-js polyfills for older browsers, the zone.js and reflect-metadata libraries needed by Angular, and the SystemJS library for module loading.
- Configuration file for SystemJS, and a script where you import and run the app module which refers to the main file that you just wrote.
- The <my-app> tag in the <body> which is where your app lives!
#### Add some styles
- lets create and link up a styles.css ( in the root )
-----------------------------
### Build and Run
```sh
$ npm start
```
##### Now if we make changes...
* browsersync will hot reload the page for us.
