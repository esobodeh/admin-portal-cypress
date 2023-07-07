context('createGroup', () => {
    beforeEach(() => {
      const fixtureArray = ['michaelTestdata']
      cy.importSelectorsAndData(...fixtureArray)
      cy.visit('/')
      cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
    })
 
        var _date = new Date()
        _date = _date.toUTCString()
        let groupName = 'Group - ' + _date;

    it('should be able to create group',  function() {
      cy.getElementByID(this.selectors.Login.emailTextfield).clear().type(this.michaelTestdata.login.username)
      cy.getElementByID(this.selectors.Login.passwordTextfield).clear().type(this.michaelTestdata.login.password)
      cy.getElementByID(this.selectors.Login.loginButton).click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/')
      cy.getElementByID(this.selectors.menu.manageMembers).click()
      cy.url().should('eq', 'http://adminportal.development.clohea.com/manage-members')
      cy.getElementByID(this.selectors.manageMembersMenu.createGroup).click()
       cy.getElementByID(this.selectors.manageMembersMenu.groupnameField).click()
       cy.getElementByID(this.selectors.manageMembersMenu.groupnameField).clear().type(groupName.toString())
       cy.getElementByID(this.selectors.manageMembersMenu.patientReg).invoke('show').eq(0).click()
       cy.getElementByID(this.selectors.manageMembersMenu.appointmentsBttn).invoke('show').eq(1).click()
       cy.getElementByID(this.selectors.manageMembersMenu.treatmentsBttn).invoke('show').eq(2).click()
       cy.getElementByID(this.selectors.manageMembersMenu.consultationBttn).invoke('show').eq(4).click()
       cy.getElementByID(this.selectors.manageMembersMenu.saveBttn).click()
       cy.getElementByID(this.selectors.manageMembersMenu.closeBttn).click()



})
})
