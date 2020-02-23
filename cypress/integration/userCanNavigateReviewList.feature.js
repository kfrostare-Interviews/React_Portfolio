describe('User can see list of reviews', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#reviews-tab').click()
    })
  
    it('displays first review from previous work places', () => {
      cy.get('#reviewCard1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Cissi');
        cy.get('.description').should('contain', 'Karro has supported me');
      })
    });
  
    it('displays second review from previous work places', () => {
      cy.get('#reviewCard2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Hasse');
        cy.get('.description').should('contain', 'Karolina, it has been a pleasure working with you');
      })
    });
  
    it('displays third review from previous work places', () => {
      cy.get('#reviewCard3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Cattis');
        cy.get('.description').should('contain', 'Karolina has been an amazing colleague with');
      })
    });

    it('displays fourth review from previous work places', () => {
        cy.get('#reviewCard4').within(() => {
          cy.get(('.image')).should('exist');
          cy.get('.ui.header').should('contain', 'Johanna');
          cy.get('.description').should('contain', 'Combine a smart, funny and creative person');
        })
      });  
  });