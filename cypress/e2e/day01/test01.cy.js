
describe('first test',()=>{

    it('test01',()=>{
        
        cy.visit('https://www.koalaresorthotels.com/')
       
        cy.url().should('include', 'koalaresorthotels')
        cy.title().should('include', 'KoalaResortHotels')

        // cy.get('#navLogon').click()
        // cy.get('#UserName').type('emre')
        // cy.get('input[class="form-control required password"]').type('EmrE12345.')    

    })

    


})