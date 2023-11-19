//cypress-mochawesome-reporter
//1 .install
//npm i --save-dev cypress-mochawesome-reporter

//2. Change cypress reporter configuration
/*cypress-mochawesome-reporter

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

*/