const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'i7p4m2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
