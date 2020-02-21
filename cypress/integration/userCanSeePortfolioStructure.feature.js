describe('Portfolio interface', () => {
    it('successfully renders',() => {
      cy.visit('http://localhost:3000');
      cy.get('#header').should('contain', 'Karolina Frostare');
      cy.get('#hello').should('contain', 'Banana!');
    })
  })