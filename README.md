# Angular Framework Study

![angular-logo](/img/angular-logo.png)

This documentation provides a basic introduction to the Angular framework, covering key concepts and providing a simple demonstration.

## Index

[Introduction](#introduction)

[Environment Setup](#environment-setup)

[Angular Basics](#angular-basics)

[Routing](#routing)

[Simple Demonstration](#simple-demonstration)

[Reference](#reference)

## Introduction

Angular is a popular web application framework developed by Google, known for building efficient and scalable single-page applications, which provides a broad suite of tools, APIs, and libraries to simplify and streamline your development workflow.

## Environment Setup

|Package|Version|
|-|-|
|Node.js|18|
|npm|>=8.1|
|ng|18|

### Install

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash
sudo apt install -y nodejs
npm install -g @angular/cli@18
```

### Check

```bash
ng version
```

Exprected to see ouput like this

```bash

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 18.2.7
Node: 18.20.4
Package Manager: npm 10.7.0
OS: linux x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1802.7 (cli-only)
@angular-devkit/core         18.2.7 (cli-only)
@angular-devkit/schematics   18.2.7 (cli-only)
@schematics/angular          18.2.7 (cli-only)
```

## Angular Basics

### Angular Architechture

The core architecture of Angular includes the following key parts:

+ **Modules**: Modules group related components and services to organize Angular applications into functional areas.
+ **Components**: Components control a view and its logic, forming the building blocks of an Angular application.
+ **Templates**: Templates define the HTML structure and behavior of a component using Angular's template syntax.
+ **Metadata**: Metadata provides extra information to Angular classes, guiding how they should be processed.
+ **Data Binding**: Data binding connects the component's data with the view, allowing interaction and dynamic updates.
+ **Directives**: Directives modify the DOM by altering element behavior or structure.
+ **Services**: Services encapsulate reusable logic or data operations and can be shared across components.
+ **Dependency Injection**: Dependency Injection allows services and objects to be efficiently shared and managed in an Angular application.

### Directory Structure

A typical Angular project is as follows:

```bash
An-angular-project/
├── src/
│   ├── app/
│   │   ├── app.component.css (or .scss)
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.node.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   └── main.ts
├── node_modules/
├── angular.json
├── package.json
└── tsconfig.json
```

+ `src/`: Contains the actual source code of the application.
  + `app/`: Main application code.
    + `app.component.css (or .scss)`: The stylesheet for the root component.
      + `.css` files contain standard CSS syntax.
      + `.scss` files use SASS syntax, offering advanced features like variables, nesting, and mixins.
    + `app.component.html`: The HTML template file for the root component of the application. It defines the structure and layout of the main app component.
    + `app.component.spec.ts`: The unit test file for the root component, used to write and run automated tests for the component, ensuring its functionality works as expected.
    + `app.component.ts`: TypeScript file defines the logic for the root component. It contains the component class, decorators, and any methods or properties used by the component.
    + `app.module.ts`: The root module of the Angular application. It's responsible for bootstrapping the application and declaring which components, services, and modules are part of the app.
  + `assets/`: Stores the static assets (images, texts, fonts, etc.).
  + `environments/`: Stores configuration settings for different environments.
    + `environment.node.ts`: For the production environment.
    + `environment.ts`: For the development environment.
  + `favicon.ico`: The icon that appears in the browser tab.
  + `index.html`: The main HTML file that serves as the entry point for the application.
  + `main.ts`: The main entry point for the application, where the application is bootstrapped. Everthing starts from here.
+ `node_modules/`: Stores all the 3rd-party libraries that the application depends on. When we compile the application, parts of the 3rd-party libraries are put in the bundle and deployed with the application.
+ `angular.json`: Angular workspace configuration file. It contains the configuration settings for the Angular CLI.
+ `package.json`: npm package management configuration file.
+ `tsconfig.json`: TypeScript compiler configuration file.

## Routing

### What is Angular Routing?

Angular routing is a navigation mechanism that allows us to switch between different views or pages within the same [Single Page Application (SPA)](https://en.wikipedia.org/wiki/Single-page_application#:~:text=A%20single-page%20application%20%28SPA%29%20is%20a%20web%20application,the%20website%20feel%20more%20like%20a%20native%20app.). With the routing system, different components can be loaded based on the requested URL without reloading the entire page.

### Basic Concepts

Thr routing system is built upon the following key concepts:

+ **Routes Configuration**: This is an array that contains the routing rules for the application, used to define the mapping between URLs and their corresponding components.
+ **RouterModule**: One of Angular's core modules, it enables routing functionality within an application. The root routes of the application are defined using the RouterModule.forRoot() method.
+ **RouterLink Directive**: This is used to create navigation links in the template. It binds to a specified route path, and when clicked, triggers navigation to the associated route.
+ **RouterOutlet**: This is a placeholder directive that defines where the view components will be loaded. Based on the active route, Angular displays the corresponding component in this location.

## Basic Usage

+ **Create a Project**:

    ```bash
    ng new my-project
    ```

+ **Create a Component**:

    ```bash
    ng generate component my-component
    ```

+ **Create a Service**:

    ```bash
    ng generate service my-service
    ```

+ **Data Binding**:
  + **Interpolation**: `{{ variable }}`
  + **Property Binding**: `[property]="value"`
  + **Event Binding**: `(event)="handler()"`
  + **Two-Way Binding**: `[(ngModel)]="property"`
+ **Using Directives**:
  + **Structural Directives**: `*ngIf`, `*ngFor`
  + **Attribute Directives**: `ngClass`, `ngStyle`

## Simple Demonstration

### Steps

1. Create a new project:

    ```bash
    ng new my-project
    cd my-project
    ```

2. Create a new component:
    This command will create a component named "hello-angualr" under `src/app/` and refresh the module configuration.

    ```bash
    ng generate component hello-angular
    ```

3. Rewrite `src/app/hello-angular/hello-angular.component.html`

    ```html
    <h1>Hello Angular</h1>
    ```

4. Rewrite `src/app/app.component.html`

    ```html
    <app-hello-angular></app-hello-angular>
    ```

5. Run
   1. If you have just clone this repo, you need to run this command to install dependencies before run `ng serve`

        ```bash
        npm install
        ```

   2. Access on the same host via: `localhost:4200`

        ```bash
        ng serve
        ```

   3. Access on different host via: `x.x.x.x:4200`

        ```bash
        ng serve --host 0.0.0.0
        ```

### Demonstration

Click the link and move to the directory: [my-project](/my-project/README.md)

Another example: [todo-list](/todo-list/README.md)

## Reference

[Angular Official Website](https://angular.dev/)

[Angular Tutorial for Beginners: Learn Angular & TypeScript](https://www.youtube.com/watch?v=k5E2AVpwsko/)

[ChatGPT](https://openai.com/chatgpt/)
