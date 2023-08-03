describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('paasses signin',()=>{
    cy.visit('http://localhost:3000/')
    cy.get('input[name="username"]:visible').type("patrasagarkumar88@gmail.com")
    cy.get('input[name="password"]:visible').type("Sagar@123", {
      // use log: false to prevent your password from showing in the Command Log
      log: false,
    })
    cy.get('button[type=submit]').click()
    cy.get('.profile').contains('patrasagarkumar88@gmail.com')
    cy.get('.profile').click()
    cy.get('button[id="radix-:r9:-trigger-1"]').click();
   

  })
  it("passes signup",()=>{
    cy.visit('http://localhost:3000/')
    cy.get('button[id="radix-:r0:-trigger-1"]').click();  
    cy.get('input[name="username"]:visible').type("shiningsagar588@gmail.com")
    cy.get('input[name="password"]:visible').type("Sagar@123", {
      // use log: false to prevent your password from showing in the Command Log
      log: false,
    })
    cy.get('input[name="confirm_password"]:visible').type("Sagar@123", {
      // use log: false to prevent your password from showing in the Command Log
      log: false,
    })
    cy.get('button[type=submit]').click()
  })
})