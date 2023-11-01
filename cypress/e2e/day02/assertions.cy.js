
describe('assertion', ()=> {

    it('Implicit Assertions ', () => {
        cy.visit('https://www.koalaresorthotels.com/')

      /*  cy.url().should('include','koalaresorthotels')
        cy.url().should('contain','koa')
        cy.url().should('eq','https://www.koalaresorthotels.com/')
        */

        cy.url().should('include','koalaresorthotels')
        .and('contain','koa')
        .and('eq','https://www.koalaresorthotels.com/')


        cy.get("a[class='navbar-brand']").should('be.visible')

        cy.get("a[class='navbar-brand']").should('exist')
       
        cy.get("a[class='navbar-brand']").should('have.value','')


        let expName='emre'

        cy.get('#edit-form > :nth-child(2)').then(function(x){

            let actName=x.text()

            expect(actName).to.equal(expName)
            
            
            assert.equal(actName,expName)




        })







    });

    it('Expilict Assertions', () => {

        cy.visit('https://www.koalaresorthotels.com/')

        cy.get('#navLogon').click()
        
        cy.get('[placeholder="Username"]').type('emre')
        
        cy.get('[placeholder="Password"]').type('EmrE12345.')
        
        cy.get('#btnSubmit').click()






        
    });





})