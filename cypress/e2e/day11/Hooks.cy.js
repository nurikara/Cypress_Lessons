
describe('Hooks', ()=> {

    //before
    //after
    //beforeEach
    //afterEach
before(() => {
cy.log('*********Launch App************')

})

after(() => {


    cy.log('*********Close App************')
})

beforeEach(() => {
    cy.log('********Loging************')
})

afterEach(() => {

    cy.log('********Logout************')
})

    it('Search', () => {

        cy.log('********Searching************')
        
    });

    it('Advanced Search', () => {
        cy.log('********Advanced Search************')
        
    });

    it('Listen Products', () => {

        cy.log('********listening Product************')
        
    });




})