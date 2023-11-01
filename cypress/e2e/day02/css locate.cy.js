describe('locates', ()=> {

    it('css locate', () => {
cy.visit('https://www.koalaresorthotels.com/')

cy.get('#navLogon').click()

cy.get('[placeholder="Username"]').type('emre')

cy.get('[placeholder="Password"]').type('EmrE12345.')

cy.get('#btnSubmit').click()


        
    });

    it('xpath', () => {

        cy.visit('https://www.koalaresorthotels.com/')

        cy.xpath("//li[@id='navLogon']")

        
    });



    
})