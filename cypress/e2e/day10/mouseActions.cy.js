describe("mouse Actions", () => {
  it("mouseOver", () => {
    cy.visit("https://demo.opencart.com/");

    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();

    cy.get('[class="dropdown-menu show"]>div>ul>li:nth-child(1)').should(
      "be.visible"
    );
  });

  it.only("rightClick", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // cy.get('[class="context-menu-one btn btn-neutral"]').trigger("contextmenu");
    cy.get('[class="context-menu-one btn btn-neutral"]').rightclick()

    cy.get(
      '[class="context-menu-list context-menu-root"]>li:nth-child(5)'
    ).should("be.visible");
  });

  it("doubleClick", () => {
    cy.visit(
      "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick"
    );

    cy.frameLoaded("#iframeResult");

    //Approuch 01
    //  cy.iframe("#iframeResult").find('[ondblclick="myFunction()"]').trigger('dblclick')

    //  cy.iframe('#iframeResult').find('#demo').should("have.text","Hello World ")

    cy.iframe("#iframeResult").find('[ondblclick="myFunction()"]').dblclick();

    cy.iframe("#iframeResult")
      .find("#demo")
      .should("have.text", "Hello World ");
  });

  it("drag and drop", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box6").drag('#box106',{force:true})
  });

it('scroll', () => {

    cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

    cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img').scrollIntoView({duration: 3000})
    cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img').should('be.visible')
    
    cy.get(':nth-child(1) > tbody > :nth-child(48) > :nth-child(1) > img').scrollIntoView({duration: 3000})
    cy.get(':nth-child(1) > tbody > :nth-child(48) > :nth-child(1) > img').should('be.visible')



    
});

});
