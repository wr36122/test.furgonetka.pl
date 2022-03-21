describe('test.furgonetka.pl test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('Visits and log in to test.furgonetka.pl application', () => {
        cy.clearCookies()
        cy.visit('https://test.furgonetka.pl/')
        cy.get('[id="loginButton"]').click().wait(1000)
        cy.get('[class="login-error"]').should('contain.text', 'Podaj e-mail i hasło.')

    });

});
