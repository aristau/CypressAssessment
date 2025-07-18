class LoginPage {
    elements = {
        pageTitle: () => cy.title(),
        emailInput: () => cy.get('[data-qa="login-email"]'),
        passwordInput: () => cy.get('[data-qa="login-password"]'),
        loginBtn: () => cy.get('[data-qa="login-button"]')
    };

    navigate(){
        cy.visit('/login')
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typePassword(password){
       this.elements.passwordInput().type(password);
    }

    clickLoginBtn(){
        this.elements.loginBtn().click();
    }

    login(email, password){
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLoginBtn();
    }
}

export default LoginPage;
