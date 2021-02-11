describe('Creating a fixture', () => {
    it('Displays the fixture in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="fixtureName"]')
        .type('New Fixture');

        cy.get('[data-testid="createButton"]')
        .click();

        cy.get('[data-testid="fixtureName"]')
        .should('have.value', '');

        cy.contains('New Fixture');
    })
});