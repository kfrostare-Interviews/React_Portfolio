describe('User can see list of previous education and employments', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click()
    })
  
    it('displays last place of employment', () => {
      cy.get('#cvCards1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Craft Academy');
        cy.get('.description').should('contain', 'BootCamp focused on learning');
      })
    });
  
    it('displays second last place of employment', () => {
      cy.get('#cvCards2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'PlantVision');
        cy.get('.description').should('contain', 'Marketing coordinator at tech');
      })
    });
  
    it('displays third last place of employment', () => {
      cy.get('#cvCards3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Tritech');
        cy.get('.description').should('contain', 'Marketing coordinator at high-tech dev');
      })
    });  
  });