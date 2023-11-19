describe('myTestSuite', () => {
it('screenshotandvideos', () => {
    
    cy.visit('https://demo.opencart.com/')

    /* cy.screenshot();

    cy.get('[class="col-md-3 col-lg-4"]').screenshot();

    */

    cy.get('.nav > :nth-child(4) > .nav-link').click()

    cy.get('#content').contains('cameras')

    
});


})