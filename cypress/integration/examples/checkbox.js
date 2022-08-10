///<reference types="Cypress"/>
describe('this is my first test', function(){

    it('login test',function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')

        // unchecked check boxes 
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2','option3'])

        // Static select drop down 
        cy.get('select').select('option2').should('have.value','option2')

        //dynamkc drop down 

        cy.get("#autocomplete").type('ind')
        cy.get(".ui-menu-item div").each(($el ,index , $list) =>{

            if($el.text()==="India"){

                cy.wrap($el).click()
            }


        })

        //Visbile and unvisible
        cy.get("#displayed-text").should('be.visible')
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should('not.be.visible')
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should('be.visible')



        

    })

})