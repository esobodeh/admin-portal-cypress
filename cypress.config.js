const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xmfk8b',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://adminportal.development.clohea.com/',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
});
