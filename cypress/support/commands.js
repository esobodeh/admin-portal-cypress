
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