describe('Automação de login', () => {
  
  const selectorsList = {
    buttonLogin: 'li > .undefined',
    userNameField: '[data-cy="email"]',
    passwordField: '[data-cy="password"]',
    singinButton: '.bg-blue-700',
    assertNewHero: 'a > .undefined',
    alertUserName: '.text-red-500',
    requiredEmail: ':nth-child(1) > .text-red-500',
    requiredpassword: ':nth-child(2) > .text-red-500'
  }
  
  it('Login com sucesso', () => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.userNameField).type('admin@test.com')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.assertNewHero).should('contain.text','Create New Hero')

  })
  it('Falha de login - Username invalido', () => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.userNameField).type('admintest.com')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Email is not valid')

  })
  it('Falha de login - Password invalido', () => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.userNameField).type('admin@test.com')
    cy.get(selectorsList.passwordField).type('test1234')
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Invalid email or password')

  })
  it('Falha de login - Username e password vazios', () => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.requiredEmail).should('contain.text','Email is required')
    cy.get(selectorsList.requiredpassword).should('contain.text','Password is required')

  })
  it('Falha de login - Username vazios', () => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.requiredEmail).should('contain.text','Email is required')
    

  })

  it('Falha de login - Password vazio', () => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.userNameField).type('admin@test.com')
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.requiredpassword).should('contain.text','Password is required')

  })
})