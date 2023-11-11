import 'cypress-iframe';

describe('iframe',() =>{

it('first way', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe')

   let iframe = cy.get('#mce_0_ifr')
   .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)


    iframe.clear().type('Welcome{ctrl+a}')

    cy.get('[aria-label="Bold"]').click()

    //cy.wait(3000)
    
    

});

it.only('Second way', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe')

     const iframe = cy.getIframe('#mce_0_ifr')


      iframe.clear().type('Welcome{ctrl+a}')

     cy.get('[aria-label="Bold"]').click()
    
});

it('third way', () => {

    cy.visit('https://the-internet.herokuapp.com/iframe')

 cy.frameLoaded("#mce_0_ifr")

 cy.iframe('#mce_0_ifr').clear().type('Welcome{ctrl+a}')

 cy.get('[aria-label="Bold"]').click()


 cy.get("[aria-label='Italic']").click();




   
    
});




})