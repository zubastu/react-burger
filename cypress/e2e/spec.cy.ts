/// <reference types="cypress" />
describe("service is available", () => {
  it("should be available on localhost:3000", () => {
    cy.viewport(1440, 842);
    cy.visit("http://localhost:3000");
  });
});
describe("Burger Constructor and login works", () => {
  it("Open ingredient modal, close by escape", () => {
    cy.viewport(1440, 842);
    cy.visit("http://localhost:3000");
    cy.get("p").contains("Краторная булка N-200i").click({ force: true });
    cy.get("body").type("{esc}");
  });

  it("should login, create order", () => {
    cy.viewport(1440, 842);
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="email"]').type("testtest@test.test");
    cy.get('input[name="password"]').type("testtest");
    cy.get("button").contains("Войти").click();
    cy.get("p").contains("Краторная булка N-200i").trigger("dragstart");
    cy.get("span").contains("Перетащите булку").trigger("drop");
    cy.get("p").contains("Сыр с астероидной плесенью").trigger("dragstart");
    cy.get("span").contains("Перетащите ингредиент").trigger("drop");
    cy.get("button").contains("Оформить заказ").click();
  });
});
