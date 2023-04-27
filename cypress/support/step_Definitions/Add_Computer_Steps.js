import { Given, Then, When } from"@badeball/cypress-cucumber-preprocessor";

const url = "https://computer-database.gatling.io/computers";

Given('I navigate to the Computer database home page', () => {
    cy.visit(url);
    
})

When('I click on the Add a new computer button', () => {
    cy.get("#add").click();
})

When('I type a Computer name {string}', (name) => {
    cy.get("#name").type(name);
})

When('I type an introduced date set before discontinued {string}', (date) => {
    cy.get("#introduced").type(date);
})

When('I type an introduced date set after discontinued {string}', (date) => {
    cy.get("#introduced").type(date);
})

When('I type a discontinued date set after introduced {string}', (date) => {
    cy.get("#discontinued").type(date);
})

When('I type a discontinued date set before introduced {string}', (date) => {
    cy.get("#discontinued").type(date);
})

When('I choose or select a computer', () => {
    cy.get("#company").select("Apple Inc.");
})

When('I click on create this computer button', () => {
    cy.get('[type="submit"]').click();
})

Then('I should be presented with a successful computer created message', () => {
    cy.get('.alert-message').contains('Done ! Computer Hewlett Packard has been created');
})

Then('I should be presented with an error message', () => {
    cy.contains('Discontinued date is before introduction date');
})

Then('I should be presented with a computer name error message', () => {
    cy.contains('Failed to refine type : Predicate isEmpty() did not fail.');
})