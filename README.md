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
|ng|16|

### Install

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash
sudo apt install -y nodejs
npm install -g @angular/cli@16
```

### Check

```bash
ng version
```

Exprected to see ouput like this

```bash
Angular CLI: 16.2.15
Node: 18.20.4
Package Manager: npm 10.7.0
OS: linux x64
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
my-angular-project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   ├── app.module.ts
│   │   └── app.component.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   └── main.ts
├── node_modules/
├── angular.json
├── package.json
└── tsconfig.json
```

+ `src/`: Contains the source code of the application.
  + `app/`: Main application code.
    + `components/`: Stores the various components.
    + `services/`: Stores service files.
    + `models/`: Stores data models.
  + `assets/`: Stores static assets (images, fonts, etc.).
  + `environments/`: Stores configuration files for different environments.
+ `node_modules/`: Stores project dependencies.
+ `angular.json`: Angular workspace configuration file.
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

## Reference

[Angular Official Website](https://angular.dev/)

[ChatGPT](https://openai.com/chatgpt/)
