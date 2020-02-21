// describe('User can navigate the Start page', () => {
//     beforeEach(() => {
//       cy.visit('http://localhost:3000');
//     })
  
//     describe('to Karro tab and it', () => {
//       beforeEach(() => {
//         cy.get('#About-tab').click();
//       });
  
//       it('displays Banana header', () => {
//         cy.get('#Banana-header').should('contain', 'Banana!');
//       });
  
//       it('displays component name in url', () => {
//         cy.url().should('contain', "Hello");
//       })
  
//       it('does not display My Projects header ', () => {
//         cy.get('#projects-header').should('not.exist');
//       });
  
//       it('does not display Hello world', () => {
//         cy.get('#hello').should('not.exist');
//       });
//     });
  
//     describe('clicks on other pages from start page',() => {
//       beforeEach(() => {
//         cy.get('#Visual work-tab').click();
//       });
  
//       it('displays My Projects header', () => {
//         cy.get('#projects-header').should('contain', 'My Projects');
//       });
  
//       it('displays component name in url', () => {
//         cy.url().should("contain", "projects");
//       })
  
//       it('does not display Karro header ', () => {
//         cy.get('#Karro-header').should('not.exist');
//       });
  
//       it('does not display Hello world', () => {
//         cy.get('#hello').should('not.exist');
//       });
//     });
  
//     describe('back to My Portfolio/Hello tab and it',() => {
//       beforeEach(() => {
//         cy.get('#Karro-tab').click();
//         cy.get('#header').click();
//       });
  
//       it('displays Hello World', () => {
//         cy.get('#hello').should('contain', 'Hello');
//       });
  
//       it('displays correct url', () => {
//         cy.url()
//           .should("not.contain", "projects")
//           .and("not.contain", "about");    
//       })
  
//       it('does not display About Me header ', () => {
//         cy.get('#about-header').should('not.exist');
//       });
  
//       it('does not display My Projects header', () => {
//         cy.get('#projects-header').should('not.exist');
//       });
//     });
//   });