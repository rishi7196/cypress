Feature: End to end Ecommerce validation

   application Regression
   
   @Regression
   Scenario: ecommeric product delvery
   Given I open Ecommerce Page
   When  I add items to cart
   And Validate the total prices
   Then select the country submit and verify thankyou

   

