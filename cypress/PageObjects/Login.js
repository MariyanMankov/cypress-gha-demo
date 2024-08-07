class Login {

    //Locators:

    emailField  = '#emailAddress'
    passwordField  = '//input[@id = "password"]'
    loginButton  = 'button[class = "v-btn v-btn--block v-btn--contained theme--light v-size--large primary"]'


    loadPage ()
    {
        var URL;
        switch (Cypress.env('environment')) {
            case 'dev':
                URL = Cypress.env('dev_url') + "login";
                break;
            case 'stage':
                URL = Cypress.env('stage_url') + "login";
                break; 
            case 'prod':
                URL = Cypress.env('prod_url') + "login";
                break;
            default:
                throw new Error("The environment is not corect! Chose between: prod/stage/dev")
        }
    
        cy.visit(URL)
    }  
    
    setUserEmail (email)
    {
        cy.get(this.emailField)
        .type(email).should('have.value', email)
    }

    setUserPassword (password)
    {
        cy.xpath(this.passwordField)
    .type(password).should('have.value', password)
    }

    clickLoginButton ()
    {
        cy.get(this.loginButton)
        .click()
    }

}

export default Login