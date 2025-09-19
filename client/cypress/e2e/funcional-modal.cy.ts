
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
    modalAlert:'.text-lg',
    modalDinheiroYes:'.gap-2 > .text-white',
    excluirHeroEdit: '.bg-red-600',
    excluirHeroEditNo:'.gap-2 > .text-gray-800',
    excluirHeroEditYes: '.gap-2 > .text-white',
    modalQuestion:'.modal-container > .open'

    
  }
    
  beforeEach(() => {
    cy.visit('/heroes')
    cy.get(selectorsList.buttonLogin).click()
    cy.get(selectorsList.userNameField).type('admin@test.com')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.singinButton).click()
    cy.get(selectorsList.assertNewHero).should('contain.text','Create New Hero')

  })
  it('Modal Dinheiro', () => {
    cy.get(selectorsList.buttonDashboards).eq(3).click()
    cy.get(selectorsList.modalQuestion).should('be.visible')

  
  })
  it('Modal Excluir', () => {
    cy.get(selectorsList.buttonDashboards).eq(5).click()
    cy.get(selectorsList.modalQuestion).should('be.visible')

  
  })
  it('Modal DELETE HERO em edit', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.excluirHeroEdit).click()
    cy.get(selectorsList.modalQuestion).should('be.visible')



  })

  

})
