describe('View news', () => {
  it('Visits the blog page', () => {
    cy.visit('http://localhost:3000/blogs');
    cy.contains('URewards');
    cy.contains('Company');
  });
});