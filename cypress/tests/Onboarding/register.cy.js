/// <reference types="cypress" />

context('Onboarding', () => {

    beforeEach(() => {
      const fixtureFiles = ['CloheaDummyData']
      cy.importSelectorsAndData(...fixtureFiles)
      cy.visit('/')
    })
  
    it('Verify Registration with Valid User data', function () {
      // -- Click on Sign Up Link/Button)
      cy.getElementByID(this.selectors.Login.signUpLinkedText).click()

      // -- type RC number into RC Number field and assert that the right company name comes out
      cy.getElementByID(this.selectors.Onboarding.rcNumber)
        .type(this.CloheaDummyData.Onboarding.rcNumber)
      cy.getElementByID(this.selectors.Onboarding.email).click()
      cy.wait(7000)
      cy.getElementByID(this.selectors.Onboarding.mcCompanyName)
        .should('have.value', this.CloheaDummyData.Onboarding.mcCompanyName)

      // -- Enter email
      cy.getElementByID(this.selectors.Onboarding.email).click()
        .type(this.CloheaDummyData.Onboarding.email)
      
      cy.get('input[placeholder*="Enter phone number"]')
        .type(this.CloheaDummyData.Onboarding.phoneNumber)  
        
        // -- Enter Password & Conform Password
      cy.getElementByID(this.selectors.Onboarding.password).click()
        .type(this.CloheaDummyData.Onboarding.password)
      cy.getElementByID(this.selectors.Onboarding.confirmPassword).click()
        .type(this.CloheaDummyData.Onboarding.password)

      cy.getElementByID(this.selectors.Onboarding.tAndCcheckbox).invoke('show').click()

      cy.getElementByID(this.selectors.Onboarding.signUpButton).click()

      cy.waitUntil(()=> cy.getElementByID(this.selectors.Onboarding.confirmOTPBtn).should('have.text', ' Confirm Email '));
      cy.wait(1000)
    })



    afterEach(()=>{
      cy.fixture('CloheaDummyData').then(function(data){
        cy.request('DELETE', 'http://rootservice.development.clohea.com/api/rootservice/v1/super-admin/tenant',
        { Email : data.Onboarding.email.trim() }).then(
        (response) => {
          expect(response.body).to.have.property('message', 'Tenant account deleted successfully') // true
          expect(response.status).to.eq(200)
        })
      })
    })
    
  })
  