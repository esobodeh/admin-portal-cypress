context('forgotpassword', () => {
    beforeEach(() => {
      const fixtureArray = ['testDataTemi']
      cy.importSelectorsAndData(...fixtureArray)
      cy.visit('/')
      cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
    })
    // it('Verify that the user can reset password successfully',function () {
    //     cy.get('[data-testid="go-to-forgot-password-link"]').click()
    //     cy.url().should('eq', 'http://adminportal.development.clohea.com/forgot-password') 
    //     cy.get('[data-testid="resetPassword-btn"]').should('be.visible')
    //     cy.get('[data-testid="forgotPassword-emailInput"]').clear().type('dimson12@yopmail.com')
    //     cy.get('[data-testid="resetPassword-btn"]').click()
    //     cy.wait(2000)
    //     cy.get('[data-testid="confirmEmail-btn"]').should('be.visible')
        

    // })
it('Prevent password reset with invalid details', ()=>{
    cy.get('[data-testid="go-to-forgot-password-link"]').click()
   // cy.getElementByID(this.selectors.Forgotpassword.forgotPasswordLinkText).click()
    cy.url().should('eq', 'http://adminportal.development.clohea.com/forgot-password')
    cy.get('[data-testid="resetPassword-btn"]').should('be.visible')
    cy.get('[data-testid="forgotPassword-emailInput"]').clear().type('redbutter')
    cy.get('[data-testid="resetPassword-btn"]').click()
    cy.get('[data-testid="emailError"]').should('have.text', 'Please enter a valid Email Address')
    })
})