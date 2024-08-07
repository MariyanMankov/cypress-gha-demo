class Toolbar {

    userType  = 'div.v-toolbar__content h4'

    checkTheUserType(expectedType)
    {
        cy.get(this.userType)
        .should('contain', expectedType)
    }
}
export default Toolbar