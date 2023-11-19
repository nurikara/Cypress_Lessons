// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Cypress.Commands.add('customClickIfVisible', (locator) => {
//     cy.get(locator).should('be.visible').then(($el) => {
//       if ($el.length > 0) {
//         cy.get(locator).contains(userdata.expected);
//         cy.wait(3000)
//         cy.get('[class="oxd-topbar-header-breadcrumb"]').click()
//         cy.get('[class="oxd-dropdown-menu"]>li:nth-child(4)').click()
//       } else {
//         cy.log(`Element with locator "${locator}" is not visible.`);
//       }
//     });
//   });


/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add('getIframe', (iframe) => {

    return cy.get(iframe)
    .its('0.contentDocument.body')
     .should('be.visible')
     .then(cy.wrap)
 
})

Cypress.Commands.add('clickLink', (lable) => {

    cy.get('a').contains(lable,{matchCase:false}).click()
})

Cypress.Commands.add('loginWeb', (mail,password) => {

cy.get('#Email').type(mail)
cy.get('#Password').type(password)

cy.get('[class="button-1 login-button"]').click()



})

