context('deleteGroup', () => {
    beforeEach(() => {
      const fixtureArray = ['michaelTestdata']
      cy.importSelectorsAndData(...fixtureArray)
      cy.visit('/')
      cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
    })
    it('should be able to create group',  function() {
      cy.getElementByID(this.selectors.Login.emailTextfield).clear().type(this.michaelTestdata.login.username)
      cy.getElementByID(this.selectors.Login.passwordTextfield).clear().type(this.michaelTestdata.login.password)
      cy.getElementByID(this.selectors.Login.loginButton).click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/')
      cy.getElementByID(this.selectors.menu.manageMembers).click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/manage-members')
      cy.getElementByID(this.selectors.deleteGroupMenu.deleteGroupBttn).click()
      cy.getElementByID(this.selectors.deleteGroupMenu.deleteBttn).invoke('show').eq(2).click()
      cy.getElementByID(this.selectors.deleteGroupMenu.closeModalBttn).click()








    })
})