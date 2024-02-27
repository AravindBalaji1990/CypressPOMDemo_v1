const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  videoCompression:30,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Browser stack demo website',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "https://bstackdemo.com/",
    env: {
      url:'https://bstackdemo.com/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  
});
