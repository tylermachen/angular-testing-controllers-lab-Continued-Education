# Writing a unit test

## Objectives

- Write a unit test that tests our Controller

## Instructions

Install Jasmine and Karma (download the `package.json` file from this repo and run `npm install` inside your terminal).

Copy the directory structure from this repo.

We've got an existing controller named ContactController. It has properties for a contact - `name`, `title` and `email`.

Run `karma start` in your command line. You'll notice that the tests are currently failing. In this case, our Controller is designed the way we want it - it's our tests that need to be updated!

In the `ContactController.spec.js` file, update the tests to check that the name, title, and email properties are their correct values.
