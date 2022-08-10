///<reference types="Cypress"/>
describe('this is my first test', function(){

    it('login test',function(){


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        // here get treats as findelement
        cy.get(".product:visible").should('have.length',4)
        // use :visible method to validate only visible element on page
          
        // this is static method 
        // here we can use as for aising
        cy.get(".products").as('productLocator')
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click()

        // implement dynamically click on any element present in page
        cy.get("@productLocator").find(".product").each(($el, index , $list) =>{

            var textValue=$el.find("h4.product-name").text()
            if(textValue.includes('Cashews'))
            {
               cy.wrap($el).find("button").click()
            }
        })
        //Assert if logo in displyaed correctly or not

        cy.get('.brand').should('have.text','GREENKART')

        // verify the text
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())


        })
       /*const logo= cy.get('.brand')
       cy.log(logo.text())*/

        
    })
})