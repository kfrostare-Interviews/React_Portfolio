describe('User can navigate the Projects page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    describe('to visit the Projects page and it', () => {
      beforeEach(() => {
        cy.get('#projects-tab').click();
      });
  
      it('displays Projects header', () => {
        cy.get('#myProjects').should('contain', 'My Projects');
      });
  
      it('displays component name in url', () => {
        cy.url().should('contain', "projects");
      })
  
      it('does not display Karro header ', () => {
        cy.get('#passionHeader').should('not.exist');
      });
  
      it('does not display Banana', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('clicks on other pages from Projects page',() => {
      beforeEach(() => {
        cy.get('#about-tab').click();
      });
  
      it('displays Karro page header', () => {
        cy.get('#passionHeader').should('contain', 'Passion number Three');
      });
  
      it('displays component name in url', () => {
        cy.url().should("contain", "about");
      })
  
      it('does not display Projects header ', () => {
        cy.get('#myProjects').should('not.exist');
      });
  
      it('does not display Start page', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('back to Projects page and it',() => {
      beforeEach(() => {
        cy.get('#projects-tab').click();
      });
  
      it('displays My Projects', () => {
        cy.get('#myProjects').should('contain', 'My Projects');
      });
  
      it('displays correct url', () => {
        cy.url()
          .should('not.contain', 'about')
          .and('not.contain', 'reviews');    
      })
  
      it('does not display Banana header ', () => {
        cy.get('#introHeader').should('not.exist');
      });
  
      it('does not display Karro header', () => {
        cy.get('#passionHeader').should('not.exist');
      });
    });
  });