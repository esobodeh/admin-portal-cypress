/// <reference types="cypress" />

context('Onboarding', () => {
    beforeEach(() => {
      cy.fixture('selectors').as('selector')
      cy.fixture('CloheaDummyData').as('testData')
      cy.visit('/')
    })
  
    it('Verify Registration with Valid User data', function () {
      // -- Click on Sign Up Link/Button)
      cy.getElementByID(this.selector.Login.signUpLinkedText).click()

      // -- type RC number into RC Number field and assert that the right company name comes out
      cy.getElementByID(this.selector.Onboarding.rcNumber)
        .type(this.testData.Onboarding.rcNumber)
      cy.getElementByID(this.selector.Onboarding.email).click()
      cy.getElementByID(this.selector.Onboarding.mcCompanyName)
        .should('have.value', this.testData.Onboarding.mcCompanyName)

      // -- Enter email
      cy.getElementByID(this.selector.Onboarding.email).click()
        .type(this.testData.Onboarding.email)
      
      cy.get('input[placeholder*="Enter phone number"]')
        .type(this.testData.Onboarding.phoneNumber)  
        
        // -- Enter Password & Conform Password
      cy.getElementByID(this.selector.Onboarding.password).click()
        .type(this.testData.Onboarding.password)
      cy.getElementByID(this.selector.Onboarding.confirmPassword).click()
        .type(this.testData.Onboarding.password)

      cy.get(':nth-child(1) > [data-v-7c5c21dc=""][data-v-59cbef9c=""] > span').click()

      cy.getElementByID(this.selector.Onboarding.signUpButton).click()

      cy.waitUntil(()=> cy.getElementByID(this.selector.Onboarding.confirmOTPBtn).should('have.text', ' Confirm Email '));
      cy.wait(1000)
      // cy.waitUntil(()=>  cy.getElementByID(this.selector.Onboarding.closeModalBtn).click())
    })



    afterEach(()=>{
      cy.fixture('CloheaDummyData').then(function(data){
        cy.request('DELETE', 'http://rootservice.development.clohea.com/api/rootservice/v1/super-admin/tenant',
        { Email : data.Onboarding.email }).then(
        (response) => {
          expect(response.body).to.have.property('message', 'Tenant account deleted successfully') // true
          expect(response.status).to.eq(200)
      })
  }
)
    })
  })
  