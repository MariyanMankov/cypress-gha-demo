const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      environment: 'dev',
      dev_url: 'https://codes-dev.iccsafe.org/',
      stage_url: 'https://codes-stage.iccsafe.org/',
      prod_url: 'https://codes.iccsafe.org/',

    },
  },
});
