class HomePage
{

    getUsername()
    {
       return cy.get("input[name='name']:nth-child(2)")
    }

    getName()
    {
       return cy.get(':nth-child(4) > .ng-valid')
    }

    inputUserNameLength()
    {
       return cy.get("input[name='name']:nth-child(2)")
    }

    getRadioButton()
    {
       return cy.get('#inlineRadio3')
    }
    getShopButton()
    {
       return cy.get(':nth-child(2) > .nav-link')
    }
    getGender()
    {

        return cy.get("select")
    }


}

export default HomePage;