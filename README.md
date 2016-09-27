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
- Bootstrapping is platform specific see [Apache Cordova](https://cordova.apache.org/) or [NativeScript](https://www.nativescript.org/)

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

---------------------------------
---------------------------------  
## Resources:
#### * (quickstart):
- [Npm Package Configuration](https://angular.io/docs/ts/latest/guide/npm-packages.html)
- [TypeScript Configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#tsconfig)
- [SystemJS module loader](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md)
- [Webpack Intro](https://angular.io/docs/ts/latest/guide/webpack.html)
- [NgModules](https://angular.io/docs/ts/latest/guide/ngmodule.html)
- [Component Decorator](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html)  

---------------------------------
---------------------------------
# Tour of Heroes

## 1. The Hero Editor
- Our Tour of Heroes uses the double curly braces of interpolation (a kind of one-way data binding) to display the application title and properties of a Hero object.
- We wrote a multi-line template using ES2015’s template strings to make our template readable.
- We can both display and change the hero’s name after adding a two-way data binding to the <input> element using the built-in ngModel directive.
- The ngModel directive also propagates changes to every other binding of the hero.name.  

---------------------------------  
### Resources:
#### * (the hero editor):  
- [Displaying Data](https://angular.io/docs/ts/latest/guide/displaying-data.html)  
- [ngModel: FormsModule](https://angular.io/docs/ts/latest/guide/forms.html#ngModel)  
- [ngModel: Template Synatax](https://angular.io/docs/ts/latest/guide/template-syntax.html#ngModel)  

---------------------------------  

## 2. Master/Detail
- Our Tour of Heroes now displays a list of selectable heroes
- We added the ability to select a hero and show the hero’s details
- We learned how to use the built-in directives ngIf and ngFor in a component’s template  

---------------------------------  
### Resources:
#### * (master/detail):
- [ngFor: Displaying Data](https://angular.io/docs/ts/latest/guide/displaying-data.html#ngFor)
- [ngFor: Template Syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html#ngFor)
- [Event Binding: User Input](https://angular.io/docs/ts/latest/guide/user-input.html)
- [Event Binding: Template Syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html#event-binding)
- [Structural Directives](https://angular.io/docs/ts/latest/guide/structural-directives.html)
- [Structural Directives: Template Syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html#directives)
- [Property Bindings](https://angular.io/docs/ts/latest/guide/template-syntax.html#property-binding)  

---------------------------------  

## 3. Multiple Components  
- We created a reusable component
- We learned how to make a component accept input
- We learned to declare the application directives we need in an Angular module. We list the directives in the NgModule decorator's declarations array.
- We learned to bind a parent component to a child component.  

---------------------------------  
### Resources:
#### * (multiple components):  
- [Single Responsibility Principle](https://blog.8thlight.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)
- [Input Properties](https://angular.io/docs/ts/latest/guide/attribute-directives.html#why-input)
- [@Input(): Attribute Directives](https://angular.io/docs/ts/latest/guide/attribute-directives.html#input)  

---------------------------------

## 4. Services
- We created a service class that can be shared by many components.
- We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates.
- We defined our HeroService as a provider for our AppComponent.
- We created mock hero data and imported them into our service.
- We designed our service to return a Promise and our component to get our data from the Promise.  

---------------------------------  
### Resources:
#### * (services):  
- [Dependency Injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html)
- [Lifecycle Hooks](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
- [Promises](http://exploringjs.com/es6/ch_promises.html)
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Take it slow: poor connection testing](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html#slow)  

---------------------------------

## 5. Routing  
- We added the Angular Router to navigate among different components.
- We learned how to create router links to represent navigation menu items.
- We used router link parameters to navigate to the details of user selected hero.
- We shared the HeroService among multiple components.
- We moved HTML and CSS out of the component file and into their own files.
- We added the uppercase pipe to format data.  

---------------------------------  
### Resources:
#### * (routing):
- [Routing and Navigation](https://angular.io/docs/ts/latest/guide/router.html)  
- [Base Href: Router](https://angular.io/docs/ts/latest/guide/router.html#!#base-href)
- [Link Parameters](https://angular.io/docs/ts/latest/guide/router.html#link-parameters-array)  
- [Redirects](https://angular.io/docs/ts/latest/guide/router.html#!#redirect)
- [CanDetective Guard](https://angular.io/docs/ts/latest/api/router/index/CanDeactivate-interface.html)
- [Pipes](https://angular.io/docs/ts/latest/guide/pipes.html)  

---------------------------------  

## 6. HTTP  
---------------------------------  
### Resources:
#### * (http):
---------------------------------
