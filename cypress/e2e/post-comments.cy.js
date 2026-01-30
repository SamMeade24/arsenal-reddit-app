describe('Post and comments flow', () => {
    it('allows a user to select a post and see comments', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="post-card"]').first().click();
        
        cy.contains(/showing comments for post/i).should('exist');
        cy.get('article').should('have.length.at.least', 1);
    });
})