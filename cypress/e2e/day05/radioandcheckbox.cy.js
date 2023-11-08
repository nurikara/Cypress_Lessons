
describe('radio and checkboxes', () => {
it.skip('radio button', () => {

    cy.visit('https://www.letskodeit.com/practice')


cy.get('#bmwradio').should('be.visible');
cy.get('#benzradio').should('be.visible');
cy.get('#hondaradio').should('be.visible');

/*cy.get('#bmwradio').check().should('be.checked')
cy.get('#benzradio').should('not.be.checked');
cy.get('#hondaradio').should('not.be.checked');

*/


cy.get('#benzradio').check().should('be.checked')
cy.get('#bmwradio').should('not.be.checked')
cy.get('#hondaradio').should('not.be.checked');





})

it('check boxs', () => {

    cy.visit('https://www.letskodeit.com/practice')

    cy.get('#bmwcheck').should('be.visible');
    cy.get('#benzcheck').should('be.visible');
    cy.get('#hondacheck').should('be.visible');


    // cy.get('#bmwcheck').check().should('be.checked');
    // cy.get('#benzcheck').should('not.be.checked');
    // cy.get('#hondacheck').should('not.be.checked');



    // cy.get('#bmwcheck').uncheck().should('not.be.checked');
    // cy.get('#benzcheck').check().should('be.checked');
    // cy.get('#hondacheck').should('not.be.checked');

    //cy.get("input[name='cars'][type='checkbox']").check().should('be.checked');

       // cy.get("input[name='cars'][type='checkbox']").first().check().should('be.checked');
       
       
       cy.get("input[name='cars'][type='checkbox']").last().check().should('be.checked');


    
});





})