describe('fileupload', () => {
it('single file uploads', () => {

    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile('test01.jpg')
    cy.get('#file-submit').click()
    cy.get('.example>h3').should('have.text','File Uploaded!')
    
});

it('file upload - rename', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile({filePath:'test01.jpg',fileName:'yusuferen.jpg'})
    cy.get('#file-submit').click()
    cy.get('.example>h3').should('have.text','File Uploaded!')


    
});

it('file upload - drag and drop', () => {
cy.visit('https://the-internet.herokuapp.com/upload')

cy.get('#drag-drop-upload')
  .attachFile('test01.jpg', { subjectType: 'drag-n-drop' });

  cy.get('.dz-filename').contains('test01.jpg')

    
});

it('multiple file uploads', () => {

    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

    cy.get('#filesToUpload')
  .attachFile(['test01.jpg', 'test02.jpg']);

  cy.get('#fileList>li:nth-child(1)').contains('test01.jpg')
  cy.get('#fileList>li:nth-child(2)').should('contain.text','test02.jpg')
});

it.only('File upload Shadow Dom', () => {
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
    cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("test01.jpg")
    cy.get('.smart-item-name',{includeShadowDom:true}).should('have.text',"test01.jpg")
});



})