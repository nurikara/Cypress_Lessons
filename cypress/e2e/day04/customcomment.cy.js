describe('Custome comments', () => {
    it('handling links', () => {

        cy.visit('https://demo.nopcommerce.com/')

        //direct -without using custom comments
        //cy.get('.product-title').contains('Apple MacBook Pro 13-inch').click()

        //using custom comments

        cy.clickLink('$25 Virtual Gift Card')

        cy.get('[class="product-name"]>h1').should('have.text','$25 Virtual Gift Card')
        
    });



})