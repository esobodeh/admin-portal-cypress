context('accountSetup', () => {
    beforeEach(() => {
      const fixtureArray = ['temisanTestdata']
      cy.importSelectorsAndData(...fixtureArray)
      cy.visit('/')
      cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
    })
    it('Validate that a new user can be added successfully', function() {

      cy.getElementByID(this.selectors.Login.emailTextfield).clear().type(this.temisanTestdata.login.username)
      cy.getElementByID(this.selectors.Login.passwordTextfield).clear().type(this.temisanTestdata.login.password)
      cy.getElementByID(this.selectors.Login.loginButton).click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/')
      cy.getElementByID(this.selectors.menu.manageMembers).click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/manage-members')
      cy.getElementByID(this.selectors.manageMembersFeatures.addUser).click()
      cy.getElementByID(this.selectors.addUserInfo.surnameTextfield)
      cy.getElementByID(this.selectors.addUserInfo.firstNameTextfield).clear().type(this.temisanTestdata.userInfo.firstName)
      cy.getElementByID(this.selectors.addUserInfo.phoneNumberTextfield).clear().type(this.temisanTestdata.userInfo.phoneNumber)
      cy.getElementByID(this.selectors.addUserInfo.emailTextfield).clear().type(this.temisanTestdata.userInfo.email)
      cy.getElementByID(this.selectors.addUserInfo.categoryDropdown).select(1).invoke("val")
      cy.getElementByID(this.selectors.addUserInfo.selectPlanCheckbox).invoke('show').eq(1).click()
      cy.getElementByID(this.selectors.addUserInfo.sendInviteBtn).click()


  
    })
   
  })