describe("Login Test", () => {
    it("should log in successfully", () => {
      cy.visit("http://localhost:3000/login");
      cy.get("#email").type("test@example.com");
      cy.get("#password").type("password123");
      cy.get("#submit").click();
      cy.url().should("include", "/dashboard");
    });
  });
  