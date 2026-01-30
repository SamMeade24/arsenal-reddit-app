describe('App loads', () => {
    it('loads the application and shows posts', () => {
        cy.visit('http://localhost:3000');

        cy.contains(/post/i).should('exist');
    });
});