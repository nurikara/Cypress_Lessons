describe("tableHandling", () => {
  beforeEach(() => {
    cy.visit(
      "https://demo.opencart.com/admin/index.php?route=common/dashboard"
    );

    cy.get('input[name="username"]').type("demo");
    cy.get('input[name="password"]').type("demo");

    cy.get('[class="btn btn-primary"]').click();

    cy.get('[class="btn-close"]').click();

    cy.get('[id="menu-customer"]').click();

    cy.get("#menu-customer>ul>li:first-child").click();
  });

  it("Check number of rows and columns", () => {
    cy.get('[class="table table-bordered table-hover"]>thead>tr>td').should(
      "have.length",
      7
    );
    cy.get('[class="table table-bordered table-hover"]>tbody>tr').should(
      "have.length",
      10
    );
  });

  it("read specific data", () => {
    cy.get("tbody > :nth-child(2) > :nth-child(3)").should(
      "have.text",
      "olaola@das.com"
    );
  });

  it("Read all data in the first page", () => {
    cy.get('[class="table table-bordered table-hover"]>tbody>tr').each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it("Pagination2", () => {
    cy.get('[class="col-sm-6 text-end"]').then((e) => {
      let myTest = e.text();

      cy.log("Sayfa bilgisi  " + myTest);

      let totalPages = myTest.substring(
        myTest.indexOf("(") + 1,
        myTest.indexOf("P") - 1
      );

      cy.log("Total pages " + totalPages);
    });
  });
  
  
  it.only("Pagination2", () => {
    let totalPages = 20;

    for (let i = 1; i <= totalPages; i++) {

        cy.log("activePage "+i)

        
    if(totalPages>1){
        cy.get('[class="pagination"]>li:nth-child('+i+')').click()
       

        
}
      cy.get('[class="table table-bordered table-hover"]>tbody>tr').each(
        ($row, index, $rows) => {
          cy.wrap($row).within(() => {
            cy.get("td:nth-child(3)").then((e) => {
              cy.log(e.text());
     });
          });
        });

    
    
    }
  });
});
