describe('User can navigate the Review page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    describe('to visit the Review page and it', () => {
      beforeEach(() => {
        cy.get('#reviews-tab').click();
      });
  
      it('displays Reviews header', () => {
        cy.get('#reviewHeader').should('contain', 'Reviews');
      });
  
      it('displays component name in url', () => {
        cy.url().should('contain', "reviews");
      })
  
      it('does not display Karro header ', () => {
        cy.get('#passionHeader').should('not.exist');
      });
  
      it('does not display Banana', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('clicks on other pages from Reviews page',() => {
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
  
    describe('back to Reviews page and it',() => {
      beforeEach(() => {
        cy.get('#reviews-tab').click();
      });
  
      it('displays Reviews header', () => {
        cy.get('#reviewHeader').should('contain', 'Reviews');
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