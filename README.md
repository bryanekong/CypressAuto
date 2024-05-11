
# Hostfully

## Description

This is a Cypress Cucumber Automation Framework.

## Installation

1.  Clone this repository to your local machine using `git clone https://github.com/bryanekong/hostfully.git`
2.  Install dependencies using `npm install`

## Usage

To run tests:

-   `npm run tests`: Runs tests in headed mode using Chrome browser and executes all feature files located in the `cypress/e2e` folder.
-   `npm run test-in-headless`: Runs tests in headless mode using Chrome browser and executes all feature files located in the `cypress/e2e` folder.

## Adding a Computer

This repository contains the feature file and step definitions for adding a computer to the computer database.

### Feature File

The feature file `Add_Computer.feature` specifies the various scenarios for adding a computer to the database with valid and invalid dates and computer names.

## Step Definitions

The step definitions for the feature file are located in `Add_Computer_Steps.js`. The `Given`, `When`, and `Then` statements are defined using the `@badeball/cypress-cucumber-preprocessor` library.

## Author

This framework was created by Bryan Aniedi-Ekong.

## License

This framework is licensed under the ISC license.

## Dependencies

-   `@badeball/cypress-cucumber-preprocessor`: ^16.0.3
-   `@bahmutov/cypress-esbuild-preprocessor`: ^2.2.0
-   `cypress`: ^12.6.0
-   `cypress-cucumber-attach-screenshots-to-failed-steps`: ^1.0.0
-   `ts-loader`: ^9.4.2

## Configuration

-   `cypress-cucumber-preprocessor`: Used for pre-processing feature files and step definitions. It specifies the following options:
    -   `stepDefinitions`: Location of step definition files.
    -   `html`: Generates an HTML report of the test run.
    -   `messages`: Generates an NDJSON report of the test run.
    -   `json`: Generates a JSON report of the test run.

**Note:** You will need to install Chrome browser to run the tests.
