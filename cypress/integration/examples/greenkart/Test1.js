///<reference types="Cypress"/>
describe('this is my first test', function(){

    it('login test',function(){


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        // here get treats as findelement
        cy.get(".product:visible").should('have.length',4)       
        cy.get(".products").as('productLocator')
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click()        
        cy.get("@productLocator").find(".product").each(($el, index , $list) =>{

            var textValue=$el.find("h4.product-name").text()
            if(textValue.includes('Cashews'))
            {
               cy.wrap($el).find("button").click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.get('body').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()
    })
})