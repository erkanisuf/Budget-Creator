/// <reference types="cypress" />

//npx cypress run --headless   : this is when in terminal CI/CD env mode,then shows in terminal
describe("first", () => {
  it("this is test", () => {
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
});
