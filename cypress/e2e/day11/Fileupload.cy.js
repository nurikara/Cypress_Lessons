describe("TestSuit", () => {
  it("Fileupoad", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("test01");

    cy.get("#file-submit").click();

    cy.get("h3").contains("File Uploaded!");
  });

  it("file  upload - rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "test01",
      fileName: "YusufEren",
    });

    cy.get("#file-submit").click();

    cy.get("h3").contains("File Uploaded!");
  });

  it("file upload-drag and drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("test01", {
      subjectType: "drag-n-drop",
    });

    cy.get(".dz-filename").contains("test01");
  });

  it("mutiple file upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    cy.get("#filesToUpload").attachFile(["test01.jpg", "test02.jpg"]);

    cy.get("#fileList").contains("test01").should("have.text", "test01.jpg");
    cy.get("#fileList").contains("test02").should("have.text", "test02.jpg");
  });

  it.only("file upload Shadow Dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );

    cy.get('[class="smart-browse-input"]', {
      includeShadowDom: true,
    }).attachFile("test01");
    cy.get('[class="smart-item-name"]', { includeShadowDom: true }).should("have.text","test01" );
  });
});
