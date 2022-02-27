/// <reference types = "cypress" />

//This function is to describe the test suite.
describe("Instagram Login Test suite", function () {

    //This function is to describe the test cases.
    it("Login Test to Instagram", function () {

    //This line of script is used to Visit web application/ base url.
    cy.visit("https://www.instagram.com/");

    //Spy on the username input field
    cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
    //Type your instagram username
    .type("quales@test.com");
    //Spy on the password field.
    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ')
    //Type password
    .type("qualestest123");
    //spy login button
    cy.get('.sqdOP > .qF0y9').click();
    //Inspect search bar
    cy.get('.eyXLr')
    //Assert that the searchbox is visible
    .should("be.visible")
  });
  
});