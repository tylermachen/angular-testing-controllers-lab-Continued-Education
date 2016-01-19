# Writing a unit test

## Objectives

- Write a unit test that tests our Controller

## Instructions

Install Jasmine and Karma (download the `package.json` file from this repo and run `npm install` inside your terminal).

Create your directory structure as follows:

- js/
  - app/
    - controllers/
      - ContactController.js
  - angular.js
  - angular-mocks.js
- tests/
  - ContactController.spec.js

You can find `angular.js` and `angular-mocks.js` inside this repo.

Inside our `ContactController.js` file, create a new controller and add values to allow us to specify a whole contact - such as job title, email, phone number.

Inside our `ContactController.spec.js` file, inject our `ContactController` controller.

Add some tests to ensure the values you set are correct.