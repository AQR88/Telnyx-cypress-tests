const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "i7p4m2",
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("uncaught:exception", (err, runnable) => {
        // просто повертаємо false, щоб не переривати тест
        return false;
      });
    },
  },
});
