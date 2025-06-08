describe("Telnyx testing", () => {
  it("should homepage contain corect hero section title", () => {
    cy.visit("https://telnyx.com");
    cy.get("span").contains("Build");
  });
  it("redirecting to registration page", () => {
    cy.visit("https://telnyx.com");
    cy.contains("Sign up").click();
    cy.wait(2000);
    cy.contains("h1", "Create a Telnyx account");
  });
  it("validation messages visibility on sign up form", () => {
    cy.visit("https://telnyx.com/sign-up");
    cy.get('form[aria-label="signup-form"] button[type="submit"]').click();
    cy.get("#email_message")
      .should("be.visible")
      .contains("This field is required.");
    cy.get("#first_name_message")
      .should("be.visible")
      .contains("This field is required.");
    cy.get("#last_name_message")
      .should("be.visible")
      .contains("This field is required.");
    cy.get("#required")
      .should("be.visible")
      .contains("This field is required.");
  });
  it("should navigate to 'Voice AI' page", () => {
    cy.visit("https://telnyx.com");
    cy.viewport(1440, 900);
    cy.contains("button", "Products").should("be.visible").click();
    cy.contains("Voice AI").click();
    cy.wait(5000);
    cy.url().should("include", "products/voice-ai");
  });
  it("AI assistant popup activating", () => {
    cy.visit("https://telnyx.com");
    cy.get(".c-bGYNvC").click();
    cy.contains("span", "Ask our AI assistant");
  });
  it("Navigate to 'Contact Us' page", () => {
    cy.visit("https://telnyx.com");
    cy.viewport(1440, 900);
    cy.contains("a", "Contact us").click();
    cy.wait(3000);
    cy.url().should("include", "/contact-us");
  });

  it("LinkedIn link in footer should open in a new tab", () => {
    cy.visit("https://telnyx.com");
    cy.get("footer").scrollIntoView();
    cy.wait(3000);
    cy.get('footer a[href*="linkedin.com"]').should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("Playback of the AI assistant's voice", () => {
    cy.visit("https://telnyx.com");
    cy.viewport(1440, 900);
    cy.contains("label", "Lead specialist").click();
    cy.contains("label", "Erica").click();
    cy.contains("span", "Let's Talk").click();
    cy.wait(7000);
    cy.get(".c-gsqZcf video").should("be.visible");
  });
  it("Registration with valid data", () => {
    cy.visit("https://telnyx.com/sign-up");
    cy.get("#email").type("email@gmail.com");
    cy.get("#first_name").type("Kirk");
    cy.get("#last_name").type("Hammett");
    cy.get("#password").type("Kirk123456789@");
    cy.get("#terms_and_conditions").click();
    cy.contains("button", "SIGN UP").click();
    cy.wait(5000);
    cy.url().should("include", "verify-email/f");
    cy.contains("h1", "One last step");
  });
  it("log in with the empty password input", () => {
    cy.visit("https://portal.telnyx.com/#/login/sign-in");
    cy.get('input[name="email"]').type("email@gmail.com");
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.contains("p", "Required")
      .should("be.visible")
      .and("have.css", "color", "rgb(212, 0, 0)");
  });
});
