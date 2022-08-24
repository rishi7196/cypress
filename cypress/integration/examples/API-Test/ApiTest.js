//<reference types="Cypress"/>
describe('this is my first test', function(){

    it('login test',function(){

        cy.request('GET','http://216.10.245.166',{

            "name":"Learn Appium Automation with Java",
            "isbn":"bccd",
            "aisle":"2c27",
            "author":"John foe"
            }).then(function(response)
            {
                //expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.eq(200)
            })

    })
})





