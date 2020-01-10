describe("Vannsl", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "Vanessa Böhner");
  });

  it("navigates to /speaking", () => {
    cy.get("nav a")
      .contains("speaking")
      .click();
    cy.url().should("include", "/speaking");
  });

  it("navigates to /writing", () => {
    cy.get("nav a")
      .contains("writing")
      .click();
    cy.url().should("include", "/writing");
  });
});
