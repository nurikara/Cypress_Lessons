//before
//after
//beforeEach
//afterEach

describe('myTestSuit', () => {

    

    before(() => {
        cy.log('********lunch App**********************')
    })

    after(() => {
        cy.log('********close App***********')
    });

    beforeEach(() => {
        cy.log('********Loging ****************')
    })

    afterEach(() => {
        cy.log('********Logout****************')
    })
it('Search', () => {

    cy.log('********Serching*********')
    
});

it('Advanced Search', () => {
 
    cy.log('********Advanced Search*********')

});

it('Listen Products', () => {

    cy.log('********Listening Products*********')
    
});



})