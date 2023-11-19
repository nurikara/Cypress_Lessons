describe('myTest',() => {

it('navigations', () => {

    cy.visit('https://demo.opencart.com/')
    cy.get('h3').should('have.text','Featured')

    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('h2').should('have.text','Cameras')

    cy.go('back')

    cy.get('h3').should('have.text','Featured')

    cy.go('forward')
    cy.get('h2').should('have.text','Cameras')

    
});


})