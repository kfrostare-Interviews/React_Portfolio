describe('User can navigate the app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    describe('to Karro tab and it', () => {
      beforeEach(() => {
        cy.get('#Karro-tab').click();
      });
  
      it('displays Karro header', () => {
        cy.get('#about-header').should('contain', 'Passion number Three');
      });
  
      it('displays component name in url', () => {
        cy.url().should("contain", "about");
      })
  
      it('does not display My Projects header ', () => {
        cy.get('#projects-header').should('not.exist');
      });
  
      it('does not display Hello world', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('to My Projects tab and it',() => {
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
  
      it('does not display Hello world', () => {
        cy.get('#hello').should('not.exist');
      });
    });
  
    describe('back to My Portfolio/Hello tab and it',() => {
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
          .and("not.contain", "about");    
      })
  
      it('does not display About Me header ', () => {
        cy.get('#about-header').should('not.exist');
      });
  
      it('does not display My Projects header', () => {
        cy.get('#projects-header').should('not.exist');
      });
    });
  });