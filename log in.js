describe('test.furgonetka.pl test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('Visits and log in to test.furgonetka.pl application', () => {
        cy.clearCookies()
        cy.visit('https://test.furgonetka.pl/')
        cy.get('[id="input_email"]').type('wr36122@student.wsb.wroclaw.pl')
        cy.get('[id="password"]').type('Ukraina2022')
        cy.get('[id="loginButton"]').click()
        cy.intercept('https://a.spolecznosci.net/geo_eu').as('https://a.spolecznosci.net/geo_eu')
        cy.wait('@https://a.spolecznosci.net/geo_eu').as('https://a.spolecznosci.net/geo_eu')
        cy.get('button').contains('Accept All').click()

    });

});
