///<reference types="Cypress"/>
describe('this is my first test', function(){

    it('login test',function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#alertbtn").click()
        cy.get("#confirmbtn").click()
        // windows:alert

        cy.on("window:alert",(str)=>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //navigation of child windows
        cy.get("#opentab").invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy.com')
       



    })
})