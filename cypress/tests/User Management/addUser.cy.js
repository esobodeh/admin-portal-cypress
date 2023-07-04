context('accountSetup', () => {
    beforeEach(() => {
      const fixtureArray = ['temisanTestdata']
      cy.importSelectorsAndData(...fixtureArray)
      cy.visit('/')
      cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
    })
    it('Validate that a new user can be added successfully', function() {

      // cy.getElementByID(this.selectors.Login.emailTextfield).clear().type(this.temisanTestdata.login.username)
      // cy.getElementByID(this.selectors.Login.passwordTextfield).clear().type(this.temisanTestdata.login.password)
      // cy.getElementByID(this.selectors.Login.loginButton).click()
      // cy.url().should('eq', 'http://adminportal.development.clohea.com/')
      cy.login(this.temisanTestdata.login.username,this.temisanTestdata.login.password)
      cy.getElementByID(this.selectors.menu.manageMembers).click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/manage-members')
      cy.getElementByID(this.selectors.manageMembersMenu.addUser).click()
      cy.getElementByID(this.selectors.userInfo.surnameTextfield).clear().type(this.temisanTestdata.userInfo.surname)
      cy.getElementByID(this.selectors.userInfo.firstNameTextfield).clear().type(this.temisanTestdata.userInfo.firstName)
      cy.getElementByID(this.selectors.userInfo.phoneNumberTextfield).clear().type(this.temisanTestdata.userInfo.phoneNumber)
      cy.getElementByID(this.selectors.userInfo.emailTextfield).clear().type(this.temisanTestdata.userInfo.email)
      cy.getElementByID(this.selectors.userInfo.categoryDropdown).select(1).invoke("val")
      cy.getElementByID(this.selectors.userInfo.selectPlanCheckbox).invoke('show').first().click()
      cy.getElementByID(this.selectors.userInfo.sendInviteBtn).click()


  
    })
   
  })