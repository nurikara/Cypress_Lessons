describe("myTestSuit", () => {
  it("DataDrivenTest", () => {
    
    cy.fixture("orangehrm2").then((data) => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      data.forEach((userdata) => {
       
        cy.get('[name="username"]').type(userdata.username);
        cy.get('[name="password"]').type(userdata.password);

        cy.get('[type="submit"]').click();

        if ((userdata.username == "Admin") &&(userdata.password == "admin123")) {
          
          cy.get('[class="oxd-topbar-header-breadcrumb"]').should("have.text",userdata.expected)
          cy.get('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()  
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click()      
        }else{
          cy.get('[class="oxd-alert-content oxd-alert-content--error"]').contains(
            userdata.expected
          )
        }
      });
    });
  });
});
