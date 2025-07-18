import HomePage from "../support/pageObjects/HomePage";
const homePage = new HomePage();

import LoginPage from "../support/pageObjects/LoginPage";
const loginPage = new LoginPage();

//Load Fixture File
before(function () {
  cy.fixture('user.json').then(function (data) {
    this.user = data;
  });
   cy.fixture('products.json').then(function (data) {
    this.products = data;
  });
});

describe('smoke test', function() {
    it('should log in successfully using data from a fixture', () => {
    cy.fixture('user').then((user) => {
      cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: {
          name: user.name,
          email: user.email,
          password: user.password,
          firstname: user.firstname,
          lastname: user.lastname,
          address1: user.address,
          country: user.country,
          state: user.state,
          city: user.city,
          zipcode: user.zip,
          mobile_number: user.phone
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    loginPage.navigate()
    loginPage.login(user.email, user.password)
    homePage.elements.pageTitle().should("include", "Automation Exercise");
    })


  })
})










