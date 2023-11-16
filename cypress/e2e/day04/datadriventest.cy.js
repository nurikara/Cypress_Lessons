describe("myTestSuit", () => {
  it("DataDrivenTest", () => {
    cy.fixture("orangehrm2").then((data) => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      data.forEach((userdata) => {
        cy.get('[placeholder="Username"]').type(userdata.username);
        cy.get('[placeholder="Password"]').type(userdata.password);

        cy.get('[type="submit"]').click();

        if ((userdata.username == "Admin") &(userdata.password == "admin123")) {
          
          cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').contains(userdata.expected)
          cy.get('.oxd-userdropdown-tab > .oxd-icon').click()  
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
