import HomePage from "../support/pageObjects/HomePage";

const homePage = new HomePage();

describe('smoke test', () => {

  it('Home page shows correct title', () => {
    homePage.navigate();
    homePage.elements.pageTitle().should("include", "Kitchen Sink");
  });


})