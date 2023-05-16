const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "t9p6aj",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
