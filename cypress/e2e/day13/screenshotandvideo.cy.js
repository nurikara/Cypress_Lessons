describe('testSuite', function() {


it('ScreenShotand Video', () => {

    cy.visit('https://demo.opencart.com/')

   /* cy.screenshot('HomePage3')

    cy.get('.nav > :nth-child(1) > .dropdown-toggle').screenshot() */

    
    cy.get(':nth-child(7) > .nav-link').click()
    

    cy.get('h2').should('have.text','Tablets')
});


})