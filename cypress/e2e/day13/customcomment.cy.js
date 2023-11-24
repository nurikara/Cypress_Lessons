

describe('Custome Comments', function () {



    it('handling Links', () => {


        cy.visit('https://demo.nopcommerce.com/')
        // cy.get('.product-title').contains('Apple MacBook Pro 13-inch').click()

        cy.clinkLink('$25 Virtual Gift Card')
        
    });



    it('login', () => {

        cy.visit('https://demo.nopcommerce.com/')


        cy.loginWeb("tester@test.com", "Emre4344");
        
    });
})