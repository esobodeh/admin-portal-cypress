
import 'cypress-wait-until';

// -- This is a parent command --
    Cypress.Commands.add('login', (email, password) => { 
    cy.fixture('selectors').then((data) => {
        cy.visit('/login');
        cy.getElementByID(data.Login.usernameTextfield)
        .type(email)
        cy.getElementByID(data.Login.password)
        .type(password)
        cy.getElementByID(data.Login.loginButton)
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