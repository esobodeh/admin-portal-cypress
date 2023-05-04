context('Login', () => {
  beforeEach(() => {
    const fixtureArray = ['testDataTemi']
    cy.importSelectorsAndData(...fixtureArray)
    cy.visit('/')
    cy.url().should('eq', 'http://adminportal.development.clohea.com/login') 
  })

  it('Verify User Can Login With Valid Details', function () {
    // cy.getElementByID(this.selectors.Login.emailTextfield).clear().type('adams22@yopmail.com')
    // cy.getElementByID(this.selectors.Login.passwordTextfield).clear().type('Adams22@??')
    // cy.getElementByID(this.selectors.Login.loginButton).click()
    // cy.url().should('eq', 'http://adminportal.development.clohea.com/') 
    // cy.get('div[role="alert"]').should('have.text', 'Medical Center Login Successful')
    cy.login('adams22@yopmail.com', 'Adams22@??')
  })
  it('Verify User Cannot Login With Invalid Details', function () {
      cy.getElementByID(this.selectors.Login.emailTextfield).type(this.testDataTemi.Login.wrongEmail)
      cy.getElementByID(this.selectors.Login.passwordTextfield).type('123')
      cy.getElementByID(this.selectors.Login.loginButton).click()
      cy.getElementByID('emailError').should('have.text','Please enter a valid Email Address')

      cy.getElementByID(this.selectors.Login.emailTextfield).clear().type('Qatest@yopmail.com')
      cy.getElementByID(this.selectors.Login.passwordTextfield).type('123')
      cy.getElementByID(this.selectors.Login.loginButton).click()
      cy.waitUntil(() => cy.get('p[class="v-toast__text"]').should('have.text','Incorrect username or password.'))
  })


  afterEach(()=>{
    
  })
})

