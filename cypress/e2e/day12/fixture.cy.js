describe("DemoTest", () => {

    let userdata;
        before( () => {

            cy.visit('https://opensource-demo.orangehrmlive.com')


        cy.fixture('orangehrm').then( (data) => {
          userdata=data;


        })})


    it.only('FixtureDemoTest', () => {
       


        cy.fixture('orangehrm').then((data) => {
            
            cy.get('[name="username"]').type(data.username)

            cy.get('[name="password"]').type(data.password)
    
            cy.get('[type="submit"]').click()

            cy.get('[class="oxd-topbar-header-breadcrumb"]').should('have.text',data.expected)


        });




        it('FixtureData2', () => {

            cy.get('[name="username"]').type(userdata.username)

            cy.get('[name="password"]').type(userdata.password)
    
            cy.get('[type="submit"]').click()

            cy.get('[class="oxd-topbar-header-breadcrumb"]').should('have.text',userdata.expected)
            
        });

       
        
    });


    });