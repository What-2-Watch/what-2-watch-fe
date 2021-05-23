describe('Flick Finder', () => {

    it('should have a login page ', () => {
        cy.fixture('sample-data.js').then(() => {
            cy.intercept('https://what-2-watch-be.herokuapp.com/v1/')
        })
        cy.visit('http://localhost:8080/ ')
        .get('section').get('form').should('have.class', 'login-form')
    }); 

    it('should log a user in with an email and password', () => {
        cy.get('section').get('form').get('input[type=text]').type('hope.gochnour@gmail.com').get('[data-cy=password]').type('1234')
        .get('button').should('have.class', 'login-btn').click()
    }); 

    // it('should  click FAVORITES button and change URL path', () => {
    //     cy.get('header').get('div').get('.nav-btn').contains('FAVORITES').click()
    //         .url().should('include', '/favorites')
    // });

    // it('should  click HOME button and change URL path', () => {
    //     cy.get('header').get('div').get('.nav-btn').contains('HOME').click()
    //         .url().should('include', '/')
    // });

    // it('should display new photo after selecting date', () => {
    //     cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
    //         .get('input[type=date]').type('2020-04-20')
    //         .should('have.value', '2020-04-20')
    //         .get('.launch-btn').click()
    //         .get('.main-container').get('.photo-container')
    //         .get('img').should('have.class', 'main-image')
    // });

    // it('should show photo details on right side of screen', () => {
    //     cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
    //     .get('label').first()
    //     .contains('BIRTHDAY').click()
    //     .get('input[type=date]').type('2015-06-03')
    //     .should('have.value', '2015-06-03')
    //     .get('.launch-btn').click()
    //     .get('.main-container').get('.details-container')
    //     .get('h1').contains('Happy Birthday')
    //     .get('h2').contains('Photo Taken By: Curiosity')
    //     .get('h1').contains('June 3')
    // })

    // it('should favorite a photo', () => {
    //     cy.get('form').get('div').should('be.visible').and('have.class', 'radio-toolbar')
    //     .get('label').first()
    //     .contains('BIRTHDAY').click()
    //     .get('input[type=date]').type('2015-06-03')
    //     .should('have.value', '2015-06-03')
    //     .get('.launch-btn').click()
    //     .get('.main-container').get('.details-container')
    //     .get('button').contains('ADD TO FAVORITES').click() 
    // })

    // it('should view favorited photos', () => {
    //     cy.get('header').get('div').get('.nav-btn').contains('FAVORITES').click()
    //     .get('section').get('article').should('have.class', 'fav-photo-container')
    // })

    // it('should show a 404 error page if the user navigates to an undefined page', () => {
    //     cy.visit('http://localhost:3000/mars')
    //     cy.contains('return to the home page')
    //     cy.get('.lost-error').click()
    //     cy.url('eq', 'http://localhost:3000/')
    // })
})
