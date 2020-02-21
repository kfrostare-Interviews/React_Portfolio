describe('User can navigate the Start page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    describe('to view the start page it', () => {
  
      it('displays Banana header', () => {
        cy.get('#banana-header').should('contain', 'Banana');
      });
  
      it('displays component name in url', () => {
        cy.url().should('contain', "Hello"); //It could also contain slash, try if this doesn't work
      })
  
      it('does not display Visual work header ', () => {
        cy.get('#projects-header').should('not.exist');
      });
  
      it('does not display Contact page', () => {
        cy.get('#contact').should('not.exist'); //This may not work... just sayin
      });
    });
    
    //Clicks the Visual work- button
    describe('clicks on other pages from start page',() => {
      beforeEach(() => {
        cy.get('#Visual work-tab').click();
      });
  
      it('displays My Projects header', () => {
        cy.get('#projects-header').should('contain', 'My Projects');
      });
  
      it('displays component name in url', () => {
        cy.url().should("contain", "projects");
      })
  
      it('does not display Karro header ', () => {
        cy.get('#Karro-header').should('not.exist');
      });
  
      it('does not display Contact', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    //Clicks the start page again
    describe('back to the Start page',() => {
      beforeEach(() => {
        cy.get('#Karro-tab').click();
        cy.get('#header').click();
      });
  
      it('displays Hello World', () => {
        cy.get('#hello').should('contain', 'Hello');
      });
  
      it('displays correct url', () => {
        cy.url()
          .should("not.contain", "projects")
          .and("not.contain", "passion");    
      });
  
      it('does not display About Me header ', () => {
        cy.get('#about-header').should('not.exist');
      });
  
      it('does not display My Projects header', () => {
        cy.get('#projects-header').should('not.exist');
      });
    });
  });