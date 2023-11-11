

describe('childTab', () => {

    it('first way', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example>a').invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows')
        
    });

    it.only('second way', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')
        
        cy.get('.example>a').then((e)=>{

           let url= e.prop('href')

           cy.visit(url)

           cy.url().should('include','https://the-internet.herokuapp.com/windows')


           cy.go('back')

 })
     
        
    });




})