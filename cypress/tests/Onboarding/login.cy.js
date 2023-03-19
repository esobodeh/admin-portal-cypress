/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
    //   cy.fixture('')
    })
  
    it('Verify User Can Login With Valid Details', function () {
      cy.visit('http://adminportal.development.clohea.com/login')
      cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
      cy.get('[data-testid="login-emailInput"]').type('annastorm12@yopmail.com')
      cy.get('[data-testid="login-passwordInput"]').type('AnnaStorm12@')
      cy.get('[data-testid="login-btn"]').click()
    })
    it('Verify User Cannot Login With Invalid Details', function () {
        cy.visit('http://adminportal.development.clohea.com/login')
        cy.url().should('eq', 'http://adminportal.development.clohea.com/login')
        cy.get('[data-testid="login-emailInput"]').type('Qatest.com')
        cy.get('[data-testid="login-passwordInput"]').type('123')
        cy.get('[data-testid="login-btn"]').click()
        cy.get('[data-testid="emailError"]').should('have.text','Please enter a valid Email Address')

      
    })


    afterEach(()=>{
      
    })
  })
  