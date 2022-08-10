const { defineConfig } = require("cypress");
module.exports = defineConfig({

  reporter: 'mochawesome',
    "retries": {
    "runMode": 2,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: 'cypress/integration/examples/*.js'
  },
  

  "env" :
  {

    "URL" : "https://rahulshettyacademy.com/angularpractice/"
  },
  


});


