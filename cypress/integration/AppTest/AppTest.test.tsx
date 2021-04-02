/// <reference types="cypress" />

import { stub } from "cypress/types/sinon";

//npx cypress run --headless   : this is when in terminal CI/CD env mode,then shows in terminal
describe("Interface", () => {
  it("Content", () => {
    cy.visit("http://localhost:3000/");
    // Contains search text inside of element
    cy.contains("Budged").should("exist");
    cy.contains("Expenses").should("exist");
    cy.contains("My budged").should("exist");
    cy.contains("Expense name").should("exist");
    cy.contains("Cost").should("exist");
    cy.contains("Category").should("exist");
    cy.contains("Value").should("exist");

    // Btns
    const addexpensebtn = cy.get(`[data-testid=addexpensebtn]`).should("exist");
    addexpensebtn.click();

    //View Ports
    // cy.viewport("iphone-8");
  });

  it("Input values with no budget Error", () => {
    cy.get(`[data-testid=inputName]`).type("Banana");
    cy.get(`[data-testid=inputNumber]`).type("35");
    cy.get(`[data-testid=inputCategory]`).type("Grocery");
    cy.get(`[data-testid=addexpensebtn]`).click();
    const stub = cy.stub();
    cy.on("window:alert", stub);
  });

  it("Input values with correct values", () => {
    cy.get(`[data-testid=addBudgetInput]`).type("2200");
    cy.get(`[data-testid=addBudgetBtn]`).click();
    cy.get(`[data-testid=addexpensebtn]`).click();
    cy.contains("Banana").should("exist");
    cy.contains("35").should("exist");
    cy.contains("Grocery").should("exist");
  });
});
