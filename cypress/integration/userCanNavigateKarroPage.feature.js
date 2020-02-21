describe('User can navigate the Karro/About me page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    describe('to visit the Karro page and it', () => {
      beforeEach(() => {
        cy.get('#about-tab').click();
      });
  
      it('displays Karros header', () => {
        cy.get('#passionHeader').should('contain', 'Passion number Three');
      });
  
      it('displays component name in url', () => {
        cy.url().should('contain', "about");
      })
  
      it('does not display My Projects header ', () => {
        cy.get('#projects-header').should('not.exist');
      });
  
      it('does not display Banana', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('clicks on other pages from Karro page',() => {
      beforeEach(() => {
        cy.get('#projects-tab').click();
      });
  
      it('displays My Projects header', () => {
        cy.get('#myProjects').should('contain', 'My Projects');
      });
  
      it('displays component name in url', () => {
        cy.url().should("contain", "projects");
      })
  
      it('does not display Karro header ', () => {
        cy.get('#introHeader').should('not.exist');
      });
  
      it('does not display Start page', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('back to Karro page and it',() => {
      beforeEach(() => {
        cy.get('#about-tab').click();
      });
  
      it('displays Passion number Three', () => {
        cy.get('#passionHeader').should('contain', 'Passion number Three');
      });
  
      it('displays correct url', () => {
        cy.url()
          .should('not.contain', 'projects')
          .and('not.contain', 'reviews');    
      })
  
      it('does not display Banana header ', () => {
        cy.get('#introHeader').should('not.exist');
      });
  
      it('does not display My Projects header', () => {
        cy.get('#projects-header').should('not.exist');
      });
    });
  });