describe('Allerts',() => {

it('Javascript allert ', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
    cy.get('[onclick="jsAlert()"]').click()

    cy.on('window:alert', (t)=> {
        expect(t).to.contains('I am a JS Alert')
    })

    cy.get('#result').should('have.text','You successfully clicked an alert')
});

it('Confirm Allert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
    cy.get('[onclick="jsConfirm()"]').click()


    cy.on('window:confirm',(t)=>{
    expect(t).to.contains('I am a JS Confirm')



})


cy.get('#result').should('have.text','You clicked: Ok')
 


})

it('Confirm Allert', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
    cy.get('[onclick="jsConfirm()"]').click()


    cy.on('window:confirm',(t)=>{
    expect(t).to.contains('I am a JS Confirm')
})
cy.on('window:confirm',() => false)

cy.get('#result').should('have.text','You clicked: Cancel')
 


})

it('Prompt Allert ', () => {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    
    cy.window().then((win)=>{

     cy.stub(win,'prompt').returns('cypress kolaydir')


})
    
    cy.get('[onclick="jsPrompt()"]').click()

    cy.get('#result').should('have.text','You entered: cypress kolaydir')
    
})


it.only('authentication Allets', () => {

    //first way

    // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{username:'admin',password:'admin'}})

    // cy.get('p').should('have.contain','Congratulations')

    //second way

 cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

   cy.get('p').should('have.contain','Congratulations')

  

})


})