class HomePage {
    elements = {
        pageTitle: () => cy.title()
    };

    navigate(){
        cy.visit('/')
    }
}

export default HomePage;
