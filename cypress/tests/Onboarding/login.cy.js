/// <reference types="cypress" />

context('Login', () => {
    beforeEach(() => {
      const fixtureArray = ['testDataTemi']
      cy.importSelectorsAndData(...fixtureArray)
      cy.visit('/')
      cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
    })
  
    it('Verify User Can Login With Valid Details', function () {
      cy.get('[data-testid="login-emailInput"]').clear().type('agromac12@yopmail.com')
      cy.get('[data-testid="login-passwordInput"]').clear().type('Agromac1234567890@')
      cy.get('[data-testid="login-btn"]').click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/') 
      cy.get('div[role="alert"]').should('have.text', 'Medical Center Login Successful')
    })
    it('Verify User Cannot Login With Invalid Details', function () {
        cy.getElementByID(this.selectors.Login.emailTextfield).type(this.testDataTemi.Login.wrongEmail)
        cy.get('[data-testid="login-passwordInput"]').type('123')
        cy.get('[data-testid="login-btn"]').click()
        cy.get('[data-testid="emailError"]').should('have.text','Please enter a valid Email Address')

        cy.get('[data-testid="login-emailInput"]').clear().type('Qatest@yopmail.com')
        cy.get('[data-testid="login-passwordInput"]').type('123')
        cy.get('[data-testid="login-btn"]').click()
        cy.waitUntil(() => cy.get('p[class="v-toast__text"]').should('have.text','Incorrect username or password.'))
    })


    afterEach(()=>{
      
    })
  })
  
