const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({

  reporter: 'mochawesome',
    "retries": {
    "runMode": 2,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here      
          on('file:preprocessor', cucumber())    
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  }, 
  
  "env" :
  {

    "URL" : "https://rahulshettyacademy.com/angularpractice/"
  },
  


});


