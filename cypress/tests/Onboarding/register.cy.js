/// <reference types="cypress" />

context('Onboarding', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Verify user inputs valid email ', () => {
      cy.get('p > a').click()
      cy.getElementByID('register-emailInput')
        .type('fake@email.com').should('have.value', 'fake@email.com')
        
    })
  })
  