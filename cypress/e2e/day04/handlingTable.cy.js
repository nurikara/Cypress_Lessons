describe('HandleTables', () => {

//     beforeEach(() => {
// cy.visit('https://demo.opencart.com/admin/index.php')




// cy.get('#input-username').type("demo")
// cy.get('#input-password').type("demo")
// cy.get('[class="btn btn-primary"]').click()

// cy.get('[class="btn-close"]').click()

// cy.get('#menu-customer>a').click()

// cy.get('#menu-customer>ul>li:first-child>a').click()
// })
it('Check Number Row and Columns', () => {
  cy.visit('https://demo.opencart.com/admin/index.php')

    cy.get('[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
    cy.get("[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
    
});

it('Check cell data from specific row and column', () => {

cy.get("[class='table table-bordered table-hover']>tbody>tr:nth-child(2)>td:nth-child(3)").should('have.text','olaola@das.com')




    
});
it('Read all all rows and columns in the first page', () => {

cy.get('[class="table table-bordered table-hover"]>tbody>tr').each(($row,index,$rows) => {
    cy.wrap($row).within(() => {

        cy.get('td').each(($col,index,$cols) => {

            cy.log($col.text()) })
        })
})

})
      it('Pagination', () => {

    cy.get('col-sm-6 text-end').then((e) => {

      let myTest = e.text()  //Showing 1 to 10 of 16313 (1632 Pages)
    let   tatalPages= myTest.substring(myTest.indexOf("("+1),myTest.indexOf("P"-1))

    cy.log('totalPages ==>'+ tatalPages)

      

 })});


})