context('accountSetup', () => {
    beforeEach(() => {
      const fixtureArray = ['testDataTemi']
      cy.importSelectorsAndData(...fixtureArray)
      cy.visit('/')
      cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
    })
    it('Validate that a new user can be added successfully', () => {
      cy.get('[data-testid="login-emailInput"]').clear().type('global12@yopmail.com')
      cy.get('[data-testid="login-passwordInput"]').clear().type('Global123@')
      cy.get('[data-testid="login-btn"]').click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/')
      cy.get('[data-testid="manageMembersLinkBtn"]').click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/manage-members')
      cy.get('[data-testid="add-btn"]').click()
      cy.get('[data-testid="createUserSurNameInput"]').clear().type('Automation')
      cy.get('[data-testid="createUserFirstNameInput"]').clear().type('Test')
      cy.get('[data-testid="createUserPhoneNumberInput"]').clear().type('08063137683')
      cy.get('[data-testid="createUserEmailInput"]').clear().type('automationtest@yopmail.com')
      cy.get('[data-testid="categorySelect"]').select(1).invoke("val").should("eq", "Medical")
      cy.get('[data-testid="select-plan-checkbox"]').invoke('show').eq(1).click()
      cy.get('[data-testid="sendInviteBtn"]').click()


  
    })
   
  })