describe('Flick Finder', () => {

    it('should have a login page ', () => {
        cy.fixture('user-data.json').then(() => {
            cy.intercept('https://what-2-watch-be.herokuapp.com/v1/users/')
        })
        cy.visit('http://localhost:8080/')
        .get('section').get('form').should('have.class', 'login-form')
    }); 

    it('should log a user in with an email and password', () => {
        cy.get('section').get('form').get('input[type=text]').type('hope.gochnour@gmail.com')
        cy.get('[data-cy=password]').type('1234')
        .get('button').should('have.class', 'login-btn').click()
        //50% of the time this doesn't click the button so it fails the rest of the tests. 
    }); 

    it('should display watch list with movies', () => {
        cy.get('section').should('have.class', 'gallery-display')
        .get('h2').contains('My Watchlist')
        .get('[data-cy=movie-card]')
        .get('img').should('be.visible')
        //add test for films with no poster 
    })

    // it('should click on a movie and display details', () => {

    // }); 

    it('should have a user profile page', () => {
        cy.get('header').get('aside').get('[data-cy=profile]').click()
        .get('section').get('.welcome-container')
        //add name to this
        .contains('h1', 'Welcome, ').next()
        .contains('h2', 'Email: hope.gochnour@gmail.com')
        .get('.lang-reg-container')
        //add language and region
        .contains('h2', 'Language: ').next()
        .contains('h2', 'Region: ')
        .get('article').get('div').get('.service-container').get('button')
        .contains('NutFlex')
    }); 

    it('should be able to search for films', () => {
        cy.get('header').get('aside').get('[data-cy=search]').click()
        .get('form').get('input[type=text]').type('tacos')
        .get('button').click()
    }); 

    it('should add a movie to the users watchlist', () => {
        cy.get('.search-view').get('[data-cy=search-grid]').get('article')
        .get('button').contains('Add to Watchlist').click()
        .get('header').get('aside').get('[data-cy=home]').click()
    }); 

    it('should thumbs up or down a movie', () => {
        cy.get('section').should('have.class', 'gallery-display')
        .get('[data-cy=movie-card]').get('article')
        .get('button').contains('👍').click()
    }); 

})
