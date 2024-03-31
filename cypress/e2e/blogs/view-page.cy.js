describe('View news', () => {
    it('Visits blog page', () => {
      cy.visit('http://localhost:3000/blogs');
    });
    it('Checking footer content', () => {
        cy.visit('http://localhost:3000/blogs');
        cy.contains('URewards');
        cy.contains('Meet our Team');
        cy.contains('Project Portfolio');
        cy.contains('Teams & Client Reviews');
        cy.contains('Services');
        cy.contains('Web Development');
        cy.contains('System Development');
        cy.contains('Mobile Development');
        cy.contains('Embedded Development');
        cy.contains('Company and Legal');
        cy.contains('Contact Us');
        cy.contains('About Us');
        cy.contains('Customers and Partners');
        cy.contains('Privacy Policy');
        cy.contains('Terms & Conditions');
        cy.contains('Cookie Policy');
        cy.contains('Non-Disclosure Agreement');
        cy.contains('Socials');
        cy.contains('urewards@gmail.com');
      });
  });