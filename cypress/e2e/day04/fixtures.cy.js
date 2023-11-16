describe("mytest Suite", () => {
  //Direct access
  it.skip("FixturesDemoTest", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.fixture("orangehrm.json").then((data) => {
      cy.get('[placeholder="Username"]').type(data.username);
      cy.get('[placeholder="Password"]').type(data.password);

      cy.get(
        '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
      ).click();
      cy.get(".oxd-topbar-header-breadcrumb>h6").contains(data.expected);
    });
  });

  let userdata;

  before(() => {
    cy.fixture("orangehrm").then((data) => {
      userdata = data;
    });
  });

  it.only("FixturesDemoTest", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.get('[placeholder="Username"]').type(userdata.username);
    cy.get('[placeholder="Password"]').type(userdata.password);

    cy.get(
      '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    ).click();
    cy.get(".oxd-topbar-header-breadcrumb>h6").contains(userdata.expected);
  });
});
