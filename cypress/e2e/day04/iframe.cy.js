
//import 'cypress-iframe';
describe('iframes', function() {
it('first way', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')

   let iframe = cy.get('#mce_0_ifr')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)

    
iframe.clear().type('Welcome{ctrl+a}')

cy.get('[aria-label="Bold"]').click()

});

it('second way', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')

   let iframe= cy.getIframe('#mce_0_ifr')
    
  iframe.clear().type('Welcome{ctrl+a}')

cy.get('[aria-label="Bold"]').click()

});

it.only('third way', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')

    cy.frameLoaded('#mce_0_ifr')
    cy.iframe('#mce_0_ifr').clear().type("welcome{ctrl+a}")

    cy.get('[aria-label="Bold"]').click()



});


})