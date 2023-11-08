describe('dropdwon', ()=>{

it.skip('select tag is avalable',() => {
    cy.visit('https://www.amazon.com.tr/')

    cy.get('[aria-describedby="searchDropdownDescription"]').select('Bebek').should('have.value','search-alias=baby')

})


it.skip('select tag is not avalable', () => {

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

    cy.get('#select2-billing_country-container').click()

    cy.get('.select2-search__field').type('Tunisia{Enter}')

    cy.get('#select2-billing_country-container').should('have.text','Tunisia')


    
});


it.skip('Auto suggest dropdown', () => {

    cy.visit('https://www.wikipedia.org/')

    cy.get("[id='searchInput']").type('istanbul')

    cy.get('.suggestion-link').contains('Atatürk Havalimanı').click()
    
});



it('Dynamic dropedown', () => {
    
    cy.visit('https://www.google.com/')


    cy.get("[class='RNNXgb']").type('cypress automation')
    cy.wait(7000)

    cy.get('[class="wM6W7d"]').should('have.length',11)
    
    cy.get('[class="wM6W7d"]').each(($el) => {
        // $el is a wrapped jQuery element
        if ($el.text().includes('cypress automation jobs')){
          
            cy.wrap($el).click();
          // wrap this element so we can
        }
        
      })

    
});
})