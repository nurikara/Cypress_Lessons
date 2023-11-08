describe('Allert', function() {
// Javascript allert : it will have same text and ok button

it('Js allert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
    cy.get("[onclick='jsAlert()']").click()

    cy.on('window:alert', (t) => {

    expect(t).to.contains('I am a JS Alert')

})
    cy.get('#result').should('have.text','You successfully clicked an alert')

   
});

// Javascript Confirm Allert : it will have some text with a text box with ok and cancel buttons 

it('Javascript Confirm Allert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get('[onclick="jsConfirm()"]').click()

    cy.on('window:confirm', (t) => {

        expect(t).contains('I am a JS Confirm')
    })

    cy.get('#result').should('have.text','You clicked: Ok')
})
it('Javascript Confirm Allert Cancel', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.get('[onclick="jsConfirm()"]').click()


    cy.on('window:confirm', (t) => {

      expect(t).contains('I am a JS Confirm')

    })

    cy.on('window:confirm', () =>false )

    cy.get('#result').should('have.text','You clicked: Cancel')



    
});

// JavaScript Prompt Allert : It will have some text and with a text box for user input along with "OK"

it('JavaScript Prompt Allert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.window().then((win)=>{
cy.stub(win,'prompt').returns('welcome')

    })


    cy.get('[onclick="jsPrompt()"]').click()

    cy.get('#result').should('have.text','You entered: welcome')



    
})


// authentication Allets
it.only('authenticated Allerts', () => {

    // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username: 'admin', password: 'admin'}})
    // cy.get('p').should('have.contain','Congratulations')


    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

 cy.get('p').should('have.contain','Congratulations')

})


})