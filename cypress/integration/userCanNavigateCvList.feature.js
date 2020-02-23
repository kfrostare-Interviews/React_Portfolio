describe('User can see list of previous employments', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click()
    })
  
    it('displays last place of employment', () => {
      cy.get('#cvCards1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', '...');
        cy.get('.description').should('contain', '...');
      })
    });
  
    it('displays second last place of employment', () => {
      cy.get('#cvCards2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', '...');
        cy.get('.description').should('contain', '...');
      })
    });
  
    it('displays third last place of employment', () => {
      cy.get('#cvCards3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', '...');
        cy.get('.description').should('...');
      })
    });  
  });