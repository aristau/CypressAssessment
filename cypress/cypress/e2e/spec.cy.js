import HomePage from "../support/pageObjects/HomePage";

const homePage = new HomePage();

//Load Fixture File
before(function () {
  cy.fixture('example.json').then(function (data) {
    this.example = data;
  });
});

describe('smoke test', function() {

  it('Home page shows correct title', function() {
    homePage.navigate();
    homePage.elements.pageTitle().should("include", "Kitchen Sink");
  });

  it('Fills out email field with fixture file', function() {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get("#email1").type(this.example.email);

  });

   it('Clicks on a link with a command', function() {
    homePage.navigate();
    cy.clickLink("type");
  });


})