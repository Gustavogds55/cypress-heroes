
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
    modalAlert:'.text-lg',
    numFans: '.block',
    excluirHeroEdit: '.bg-red-600',
    excluirHeroEditNo:'.gap-2 > .text-gray-800',
    excluirHeroEditYes: '.gap-2 > .text-white',
    modalQuestion:'.modal-container > .open',
    modalNo: '.gap-4 > .gap-2 > .text-gray-800'

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
  it('Funcionalidade LIKE', () => {
    let valorInicialLike: number ;
    cy.get(selectorsList.numFans).eq(1)
    .invoke('text')
    .then(text => {
      valorInicialLike = parseInt(text, 10);
  })
    .then(() => {
    cy.get(selectorsList.buttonDashboards).eq(2).click();
  })
    .then(() => {
    cy.get(selectorsList.numFans).eq(1).should('have.text', `${valorInicialLike + 1}`);
  })
  })

  it('Funcionalidade Contratar', () => {
    let valorInicialLike: number ;
    cy.get(selectorsList.numFans).eq(2)
    .invoke('text')
    .then(text => {

      valorInicialLike = parseInt(text, 10);
  })
    .then(() => {
    cy.get(selectorsList.buttonDashboards).eq(3).click()
    cy.get('.gap-2 > .text-white').should('contain.text','Yes').click()
  })
    .then(() => {
    cy.get(selectorsList.numFans).eq(2).should('have.text', `${valorInicialLike + 1}`);
  })

  })
  it.only('Funcionalidade No Contratar', () => {
    cy.get(selectorsList.buttonDashboards).eq(3).click()
    cy.get(selectorsList.modalNo).click()
    cy.get(selectorsList.modalQuestion).should('not.exist')
    

  })
  it('Funcionalidade Editar', () => {
    cy.get(selectorsList.buttonDashboards).eq(4).click()
    cy.get(selectorsList.excluirHeroEdit).should('contain.text','Delete Hero')

  })
  it('Funcionalidade Excluir', () => {
    cy.get(selectorsList.buttonDashboards).eq(5).click()
    cy.get(selectorsList.modalAlert).should('contain.text','Delete Hero?')

  })
  it.only('Funcionalidade No Excluir', () => {
    cy.get(selectorsList.buttonDashboards).eq(5).click()
    cy.get(selectorsList.modalNo).click()
    cy.get(selectorsList.modalQuestion).should('not.exist')
    

  })
  

})
