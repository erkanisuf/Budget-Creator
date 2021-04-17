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
  });

  it("Input values with no budget Error", () => {
    cy.get(`[data-testid=inputName]`).type("Banana");
    cy.get(`[data-testid=inputNumber]`).type("35");
    cy.get(`[data-testid=inputCategory]`).type("Grocery");
    cy.get(`[data-testid=addexpensebtn]`).click();
    const stub = cy.stub();
    cy.on("window:alert", stub);
  });

  it("Add Button tests for budget and Items", () => {
    cy.get(`[data-testid=addBudgetInput]`).type("2200");
    cy.get(`[data-testid=addBudgetBtn]`).click();
    cy.get(`[data-testid=addexpensebtn]`).click();
    cy.contains("Banana").should("exist");
    cy.contains("35").should("exist");
    cy.contains("Grocery").should("exist");
  });
  it("Edit Button test", () => {
    cy.get(`[data-testid=editBtn]`).click();
    cy.get(`[data-testid=inputEdit1]`).should("exist");
    cy.get(`[data-testid=inputEdit2]`).should("exist");
    cy.get(`[data-testid=inputEdit3]`).should("exist");
    cy.get(`[data-testid=inputEdit1]`).clear();
    cy.get(`[data-testid=inputEdit1]`).type("Changed Value");
  });
  it("Save Edit btn", () => {
    cy.get(`[data-testid=saveeditBtn]`).click();
    cy.contains("Banana").should("not.exist");
    cy.contains("Changed Value").should("exist");
  });

  it("Delete Button test", () => {
    cy.get(`[data-testid=deleteBtn]`).click();
    cy.contains("Changed Value").should("not.exist");
    cy.contains("35").should("not.exist");
    cy.contains("Grocery").should("not.exist");
  });
});

describe("Viewports", () => {
  it("check diffrent views", () => {
    cy.viewport("macbook-15");
    cy.wait(200);
    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("ipad-2");
    cy.wait(200);
    cy.viewport("ipad-mini");
    cy.wait(200);
    cy.viewport("iphone-6+");
    cy.wait(200);
    cy.viewport("iphone-6");
    cy.wait(200);
    cy.viewport("iphone-5");
    cy.wait(200);
    cy.viewport("iphone-4");
    cy.wait(200);
    cy.viewport("iphone-3");
    cy.wait(200);
    cy.viewport(1500, 1500);
    cy.wait(200);
  });
});
