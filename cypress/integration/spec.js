describe("Vannsl", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "Vanessa Böhner");
  });

  it("navigates to /about", () => {
    cy.get("nav a")
      .contains("about")
      .click();
    cy.url().should("include", "/about");
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

  it("navigates to /projects", () => {
    cy.get("nav a")
      .contains("projects")
      .click();
    cy.url().should("include", "/projects");
  });
});
