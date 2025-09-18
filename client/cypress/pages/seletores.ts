class Seletores {
    selectorsList()  {
        const selectors = {
            buttonLogin: 'li > .undefined',
            userNameField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            singinButton: '.bg-blue-700',
            assertNewHero: 'a > .undefined',
            alertUserName: '.text-red-500',
            requiredEmail: ':nth-child(1) > .text-red-500',
            requiredpassword: ':nth-child(2) > .text-red-500'

        }
  }
}

export default Seletores

