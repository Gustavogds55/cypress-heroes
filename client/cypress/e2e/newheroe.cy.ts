
describe('Cadastrar novo Heroi', () => {
  
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
    submitButton:'Submit'

  }
    beforeEach(() => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.userNameField).type('admin@test.com')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.assertNewHero).should('contain.text','Create New Hero')
  })

  it('Novo heroi com dados informados ', () => {
    cy.get(selectorsList.newHeroiButton).click()
    cy.get(selectorsList.nameHeroi).type('Feiticeira')
    cy.get(selectorsList.priceHeroes).type('500')
    cy.get(selectorsList.fasHeroes).type('4000')
    cy.get(selectorsList.savesHeroes).type('444')
    cy.get(selectorsList.selectPowers).select('5')
    cy.contains(selectorsList.submitButton).click()

  })
  it('Novo heroi sem passar o name', () => {
    cy.get(selectorsList.newHeroiButton).click()
    cy.get(selectorsList.priceHeroes).type('500')
    cy.get(selectorsList.fasHeroes).type('4000')
    cy.get(selectorsList.savesHeroes).type('444')
    cy.get(selectorsList.selectPowers).select('5')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Name is required')

  })
  it('Novo heroi sem passar o price', () => {
    cy.get(selectorsList.newHeroiButton).click()
    cy.get(selectorsList.nameHeroi).type('Feiticeira')
    cy.get(selectorsList.fasHeroes).type('4000')
    cy.get(selectorsList.savesHeroes).type('444')
    cy.get(selectorsList.selectPowers).select('5')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Price is required')

  })
  it('Novo heroi sem passar o fans', () => {
    cy.get(selectorsList.newHeroiButton).click()
    cy.get(selectorsList.nameHeroi).type('Feiticeira')
    cy.get(selectorsList.priceHeroes).type('500')
    cy.get(selectorsList.savesHeroes).type('444')
    cy.get(selectorsList.selectPowers).select('5')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Fans is required')

  })
  it('Novo heroi sem passar o saves', () => {
    cy.get(selectorsList.newHeroiButton).click()
    cy.get(selectorsList.nameHeroi).type('Feiticeira')
    cy.get(selectorsList.priceHeroes).type('500')
    cy.get(selectorsList.fasHeroes).type('4000')
    cy.get(selectorsList.selectPowers).select('5')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Saves is required')

  })
  it('Novo heroi sem passar o powers', () => {
    cy.get(selectorsList.newHeroiButton).click()
    cy.get(selectorsList.nameHeroi).type('Feiticeira')
    cy.get(selectorsList.priceHeroes).type('500')
    cy.get(selectorsList.fasHeroes).type('4000')
    cy.get(selectorsList.savesHeroes).type('444')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Powers is required')

  })
  
})