/// <reference types="cypress" />
describe("service is available", () => {
  it("should be available on localhost:3000", () => {
    cy.viewport(1440, 842);
    cy.visit("/");
  });
});
describe("Burger Constructor and login works", () => {
  it("Open ingredient modal, close by escape", () => {
    cy.viewport(1440, 842);
    cy.visit("/");
    cy.wait(500);
    cy.get("p").contains("Краторная булка N-200i").click({ force: true });
    cy.get("body").type("{esc}");
    cy.wait(500);
    cy.get("p").contains("Краторная булка N-200i").click({ force: true });
    cy.get('[data-testid="close"]').click();
  });

  it("Ingredients tabs click", () => {
    cy.viewport(1440, 842);
    cy.visit("/");
    cy.wait(500);
    cy.get('[data-testid="tabs"]').click({
      multiple: true,
    });
  });

  it("should login, create order", () => {
    cy.viewport(1440, 842);
    cy.visit("/login");
    cy.wait(500);
    cy.get('input[name="email"]').type("testtest@test.test");
    cy.get('input[name="password"]').type("testtest");
    cy.get("button").contains("Войти").click();
    cy.wait(500);
    cy.get("p").contains("Краторная булка N-200i").trigger("dragstart");
    cy.get("span").contains("Перетащите булку").trigger("drop");
    cy.wait(500);
    cy.get("p").contains("Соус Spicy-X").trigger("dragstart");
    cy.wait(500);
    cy.get("span").contains("Перетащите ингредиент").trigger("drop");
    cy.wait(500);
    cy.get("button").contains("Оформить заказ").click();
    cy.wait(16000);
    cy.get('[data-testid="close"]').click();
  });

  describe("App routes", () => {
    it("click on routes", () => {
      cy.viewport(1440, 842);
      cy.visit("/");
      cy.wait(500);
      cy.get("a")
        .contains("Конструктор")
        .click()
        .location("pathname")
        .should("equal", "/");
      cy.wait(500);
      cy.get("a")
        .contains("Лента заказов")
        .click()
        .location("pathname")
        .should("equal", "/feed");
      cy.wait(500);
      cy.get("a")
        .contains("Войти")
        .click()
        .location("pathname")
        .should("equal", "/login");
      cy.wait(500);
      cy.get(`[data-testid="logo"]`)
        .click()
        .location("pathname")
        .should("equal", "/");
      cy.wait(500);
    });
  });
});
