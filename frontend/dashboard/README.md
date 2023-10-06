# Enigneer take home project 

### The Project
Complete an in progress Dashboard that gives a user insights into their accounts receivable.  You will be updating the dashboard to get "live" data from an API service as well as adding a new graph to show their monthly sales over time.

### Requirements
* Create a simple API service using your favorite language, that will return the data needed for the dashboard components.  The data for each component can be found in the following files:
  * [Blogs](./src/app/dashboard/dashboard-components/blog-cards/blog-cards-data.ts)
  * [Feeds](./src/app/dashboard/dashboard-components/feeds/feeds-data.ts)
  * [Monthly Sales](./src/app/dashboard/dashboard-components/monthly-sales/monthly-sales-data.ts)
  * [Top Cards](./src/app/dashboard/dashboard-components/top-cards/top-cards-data.ts)
  * [Top Customers](./src/app/dashboard/dashboard-components/top-customers/top-customers-data.ts)
* Update the angular application to use the api service to get the data needed for the dashboard.  
* Create a new component using [chart.js](https://www.chartjs.org/) to visualize the users Monthly Sales in a clear and intuitive manner. [A shell component has been started for you.](./src/app/dashboard/dashboard-components/monthly-sales)

### Technical Requirements
* The API service can be written in the language of your choice, but you must include instructions on how to run it and how to interact with it
* Be sure to consider edge cases and error handling
* You will need to have Node.js and npm installed to build the angular application
  * [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* Have fun and be creative!

### Duration
While we do not anticipate this taking more than a few hours, we understand that life happens and we want you to have as much time as you need to complete the project.  You will have 1 week to complete this task.  Feel free to reach out to us if you feel like you need more time.

### Submission
Submit your finished project with notes on how to run it in an email to Christoper Fontaine cfontaine@lsq.com.

Feel free to reach out with any questions.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.
### Installing packages
* Prior to running the angular application for the first time you will need to install the required packages with the command `npm install`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
