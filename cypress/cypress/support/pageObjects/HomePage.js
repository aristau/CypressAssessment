class HomePage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit('https://example.cypress.io')
    }
}

export default HomePage;
