
describe('Funcionalidade EDITAR HEROI', () => {
  
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
    modalAlert:'.text-lg',
    excluirHeroEdit: '.bg-red-600',
    excluirHeroEditNo:'.gap-2 > .text-gray-800',
    excluirHeroEditYes: '.gap-2 > .text-white'

    
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
  it('Editar Heroi campo NAME vazio', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.nameHeroi).clear()
    cy.get(selectorsList.priceHeroes).clear().type('500')
    cy.get(selectorsList.fasHeroes).clear().type('4000')
    cy.get(selectorsList.savesHeroes).clear().type('444')
    cy.get(selectorsList.selectPowers).select('4')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Name is required')

  })
  it('Editar Heroi campo PRICE vazio', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.nameHeroi).clear().type('Feiticeira')
    cy.get(selectorsList.priceHeroes).clear()
    cy.get(selectorsList.fasHeroes).clear().type('4000')
    cy.get(selectorsList.savesHeroes).clear().type('444')
    cy.get(selectorsList.selectPowers).select('4')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Price is required')

  })
  it('Editar Heroi campo FANS vazio', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.nameHeroi).clear().type('Feiticeira')
    cy.get(selectorsList.priceHeroes).clear().type('500')
    cy.get(selectorsList.fasHeroes).clear()
    cy.get(selectorsList.savesHeroes).clear().type('444')
    cy.get(selectorsList.selectPowers).select('4')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Fans is required')

  })
  it('Editar Heroi campo SAVES vazio', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.nameHeroi).clear().type('Feiticeira')
    cy.get(selectorsList.priceHeroes).clear().type('500')
    cy.get(selectorsList.fasHeroes).clear().type('4000')
    cy.get(selectorsList.savesHeroes).clear()
    cy.get(selectorsList.selectPowers).select('2')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.alertUserName).should('contain.text','Saves is required')

  })
  it('Editar Heroi com espaço simples so invés do NAME', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.nameHeroi).clear().type(' ')
    cy.get(selectorsList.priceHeroes).clear().type('500')
    cy.get(selectorsList.fasHeroes).clear().type('4000')
    cy.get(selectorsList.savesHeroes).clear().type('444')
    cy.get(selectorsList.selectPowers).select('4')
    cy.contains(selectorsList.submitButton).click()
    cy.get(selectorsList.assertNewHero).should('contain.text','Create New Hero')

  })
  it('Botão excluir heroi NO', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.excluirHeroEdit).click()
    cy.get(selectorsList.excluirHeroEditNo).click()
    cy.get(selectorsList.excluirHeroEdit).should('contain.text','Delete Hero')


  })
  it.only('Botão excluir heroi YES', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.excluirHeroEdit).click()
    cy.get(selectorsList.excluirHeroEditYes).click()



  })
  

})
