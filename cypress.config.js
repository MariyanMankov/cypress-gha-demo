const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      environment: 'stage',
      dev_url: 'https://codes-dev.iccsafe.org/',
      stage_url: 'https://codes-stage.iccsafe.org/',
      prod_url: 'https://codes.iccsafe.org/',

    },
  },
});
