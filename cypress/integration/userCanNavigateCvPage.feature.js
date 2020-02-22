describe('User can navigate the Contact page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    describe('to visit the CV page and it', () => {
      beforeEach(() => {
        cy.get('#cv-tab').click();
      });
  
      it('displays Contact header', () => {
        cy.get('#cvHeader').should('contain', 'Workplaces');
      });
  
      it('displays component name in url', () => {
        cy.url().should('contain', "cv");
      })
  
      it('does not display Karro header ', () => {
        cy.get('#passionHeader').should('not.exist');
      });
  
      it('does not display Banana', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('clicks on other pages from Cv page',() => {
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
  
    describe('back to Cv page and it',() => {
      beforeEach(() => {
        cy.get('#cv-tab').click();
      });

      it('displays component name in url', () => {
        cy.url().should('contain', "cv");
      })
  
      it('displays Cv header', () => {
        cy.get('#cvHeader').should('contain', 'Workplaces');
      });
  
      it('displays correct url', () => {
        cy.url()
          .should('not.contain', 'about')
          .and('not.contain', 'projects');    
      })
  
      it('does not display Banana header ', () => {
        cy.get('#introHeader').should('not.exist');
      });
  
      it('does not display Karro header', () => {
        cy.get('#passionHeader').should('not.exist');
      });
    });
  });