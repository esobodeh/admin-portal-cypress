
import 'cypress-wait-until';

// -- This is a parent command --
    Cypress.Commands.add('login', (email, password) => { 
    cy.fixture('selectors').then((data) => {
        cy.getElementByID(data.Login.emailTextfield)
        .type(email)
        cy.getElementByID(data.Login.passwordTextfield)
        .type(password)
        cy.getElementByID(data.Login.loginButton).click()
        cy.url().should('eq', 'http://adminportal.development.clohea.com/') 
        cy.get('div[role="alert"]').should('have.text', 'Medical Center Login Successful')
    })
 })
Cypress.Commands.add('getElementByID', (selector) => { 
    cy.get(`[data-testid="${selector}"]`);
})
Cypress.Commands.add('importSelectorsAndData',(...fixtureArray) => 
{
    // -- Default Fixture Files List --
    // if(fixtureArray.length == 0)
    // {
    //     fixtureArray = ['selectors', 'CloheaDummyData']
    // }


    // -- Default Fixture Files List --
    let defaultFixtureFile = 'selectors'
    if(fixtureArray.length == 0)
    {
        fixtureArray.push('CloheaDummyData', defaultFixtureFile)
    }
    else
    {
        fixtureArray.push(defaultFixtureFile)
    }

    fixtureArray.forEach(element => {
        cy.fixture(element).as(element)
    });
})