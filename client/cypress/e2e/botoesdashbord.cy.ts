
describe('Botoes Dashboard', () => {
  
    const selectorsList = {
    buttonLogin: 'li > .undefined',
    userNameField: '[data-cy="email"]',
    passwordField: '[data-cy="password"]',
    singinButton: '.bg-blue-700',
    assertNewHero: 'a > .undefined',
    alertUserName: '.text-red-500',
    requiredEmail: ':nth-child(1) > .text-red-500',
    requiredpassword: ':nth-child(2) > .text-red-500',
    newHeroiButton: 'a > .undefined',
    nameHeroi: '[data-cy="nameInput"]',
    priceHeroes: '[data-cy="priceInput"]',
    fasHeroes: '[data-cy="fansInput"]',
    savesHeroes: '[data-cy="savesInput"]',
    selectPowers: '[data-cy="powersSelect"]',
    submitButton:'Submit',
    logoutButton: 'nav > .flex > :nth-child(2) > .undefined',
    assertButtonLogin: ':nth-child(1) > .mb-2',
    buttonDashboards: 'button',
    modalAlert:'.text-lg'
    

  }
    beforeEach(() => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.userNameField).type('admin@test.com')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.assertNewHero).should('contain.text','Create New Hero')

  })
  it('Funcionalidade CREATE NEW HERO', () => {
    cy.get(selectorsList.assertNewHero).click()
    cy.get(selectorsList.assertButtonLogin).should('contain.text','Name')

  })
  it('Funcionalidade LOGOUT', () => {
    cy.get(selectorsList.logoutButton).click()
    cy.get(selectorsList.buttonLogin).should('contain.text','Login')

  })

  it.only('Funcionalidade LIKE', () => {

  })

  it('Funcionalidade DINHEIRO', () => {
    cy.get(selectorsList.buttonDashboards).eq(3).click()
    cy.get(selectorsList.modalAlert).should('contain.text','Hire Hero?')

  })
  it('Funcionalidade Excluir', () => {
    cy.get(selectorsList.buttonDashboards).eq(5).click()
    cy.get(selectorsList.modalAlert).should('contain.text','Delete Hero?')

  })
  

})
