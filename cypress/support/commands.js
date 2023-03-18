
import 'cypress-wait-until';
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.fixture('CloheaDummyData').then((data) => {
        cy.visit('/login');
        // cy.getElementByID(data.Login.usernameTextfield)
        // .type()
    })
 })
 Cypress.Commands.add('getElementByID', (selector) => { 
    cy.get(`[data-testid="${selector}"]`);
})