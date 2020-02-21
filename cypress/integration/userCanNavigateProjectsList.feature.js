describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#projects-tab').click();
    })
  
    it('displays first project', () => {
      cy.get('#projectCards1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'The BMI Calculator');
        cy.get('.description').should('contain', '| Programmed and tested with: JavaScript,');
      })
    });
  
    it('displays second project', () => {
      cy.get('#projectCards2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'The Address Book');
        cy.get('.description').should('contain', '| Programmed and tested with: JavaScript, Cypress');
      })
    });
  
    it('displays third project', () => {
      cy.get('#projectCards3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'The Little Newsroom');
        cy.get('.description').should('contain', "| Programmed and tested with: Ruby on Rails, Rspec");
      })
    });  
  });