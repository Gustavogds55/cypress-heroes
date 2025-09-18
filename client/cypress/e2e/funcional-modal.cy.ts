
describe('Funcionalidades MODAL', () => {
  
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
  it('Editar Heroi com dados validos', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.nameHeroi).clear().type('Feiticeira')
    cy.get(selectorsList.priceHeroes).clear().type('500')
    cy.get(selectorsList.fasHeroes).clear().type('4000')
    cy.get(selectorsList.savesHeroes).clear().type('444')
    cy.get(selectorsList.selectPowers).select('4')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.assertNewHero).should('contain.text','Create New Hero')

  })

  

})
