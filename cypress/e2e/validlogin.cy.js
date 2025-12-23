describe('Login test',()=>{
    it('should log in successfully with valid credentials',()=>{

        //visit login page
        cy.visit('https://test-01.tech11.com')

        //type username and password
        cy.get('#username').type('claudia.niemeier@example.com')
        cy.get('#password').type('ixiKRjGTws2zDYiHU5nfLYBz2fzSGCvK')

        //click the login button
        cy.get('#kc-login').click()

        //assertion
        cy.get('h1.display-1.m-5', { timeout: 10000 }).should('have.text', 'tech11')

    })
})