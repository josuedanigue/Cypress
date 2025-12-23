 describe('Login test',()=>{
    it('should log in successfully with values in env files',()=>{

       cy.visit(Cypress.env('baseUrl'));

       cy.get('#username').type(Cypress.env('username'));
       cy.get('#password').type(Cypress.env('password'));


        //click the login button
        cy.get('#kc-login').click()
        cy.wait(2000);

        //assertion
        cy.get('h1.display-1.m-5', { timeout: 10000 }).should('have.text', 'tech11')

    })
})