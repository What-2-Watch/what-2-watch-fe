describe('Flick Finder login process', () => {
    beforeEach(() => {
        cy.fixture('user-data.json').then((data) => {
            cy.intercept('https://what-2-watch-be.herokuapp.com/v1/users/', {
                statusCode: 200,
                body: data
            })
        })
        
        cy.fixture('single-user.json').then((data) => {
            cy.intercept('https://what-2-watch-be.herokuapp.com/v1/users/1/', {
                statusCode: 200,
                body: data
            })
        })
        cy.visit('http://localhost:8080')
    })
    it('should have a login page ', () => {
        cy.get('section').get('form').should('have.class', 'login-form')
    }); 
    
    it('should log a user in with an email and password', () => {
        cy.get('section').get('form').get('input[type=email]').type('hope.gochnour@gmail.com')
        cy.get('[data-cy=password]').type('1234')
        cy.get('.login-btn').click()
    }); 
    
    describe('After Login', () => {
        beforeEach(() => {
            cy.get('section').get('form').get('input[type=email]').type('hope.gochnour@gmail.com')
            cy.get('[data-cy=password]').type('1234')
            cy.get('.login-btn').click()
            cy.fixture('vico-c.json').then(data => {
                cy.intercept('https://api.themoviedb.org/3/movie/null?api_key=d485a0da5573c3e7d61614d66ae23824', {
                    statusCode: 200,
                    body: data
                })
            })
        })
        it('should display recommended movies', () => {
            cy.get('h1').last().wait(0).contains('Hope\'s REC')
            .get('[data-cy=movie-card]')
            .get('img').should('be.visible')
        })
        
        it('should click on a movie and display details', () => {
            cy.visit('http://localhost:8080/#/profile')
            cy.get('[data-cy=profile]').click().wait(0)
            cy.get('img[alt="Vico C: The Life Of A Philosopherposter"]').click()
            cy.get('.modal').should('be.visible')
            
        }); 
        
        it('should have a user profile page', () => {
            cy.visit('http://localhost:8080/#/profile')
            .get('section').get('.welcome-container')
        }); 
        
        it('should be able to search for films', () => {
            cy.get('header').get('aside').get('[data-cy=search]').click()
            .get('form').get('input[type=text]').type('tacos')
            .get('button').click()
        }); 

    })
})
        