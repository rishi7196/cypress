import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
///<reference types="Cypress"/>
import HomePage from '../../../examples/pageObject/HomePage'
import ProductPage from '../../../examples/pageObject/productPage'

const homepage=new HomePage()
const productpage=new ProductPage()

Given('I open Ecommerce Page',()=>
{
    //cy.visit(Cypress.env('URL'))
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

//I add items to cart

When('I add items to cart',function()
{
    homepage.getShopButton().click()     

    this.data.productName.forEach(function(element)
    {
        cy.selecProduct(element)
    })     
    productpage.getCheckoutButton().click()
})

// Validate the total prices 

And('Validate the total prices',()=>
{

    var sum=0
        cy.get("tr td:nth-child(4) strong").each(($el,index,$list)=>{
            const amount=$el.text()
            var res=amount.split(" ")
            res=res[1].trim()           
            sum =Number(sum)+Number(res)            
        }).then(function()
        {
            cy.log(sum)
        })        
        cy.get("h3 strong").then(function(element)
        {
            const amount=element.text()
            var res=amount.split(" ")
            var total=res[1].trim()
            //Assertion in java scrip
            expect(Number(total)).to.equal(sum) 
        })


    })

    //select the country submit and verify thankyou

    Then('select the country submit and verify thankyou',()=>
    {

        cy.get("button[class='btn btn-success']").click()
        cy.get("#country").type("India")
        cy.wait(6000)
        cy.get('.suggestions > ul > li > a')
        cy.get("#checkbox2").click({force:true})
        cy.get('.ng-untouched > .btn').click()

        cy.get('.alert').then(function(element){

            const textMessage=element.text()
            expect(textMessage.includes("Success")).to.be.true
    })
})
        
    




