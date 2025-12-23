import { login } from "../utils/login";

describe('Create RO', ()=>{
    it('should create a car RO', ()=>{
        login(); //calling the login here 

        //click clerk ui button to access its page
        cy.get('a[href="./clerk-ui"]').should('be.visible').click();

        cy.wait(2000);

        //assert the clerk ui link 
        cy.url().should('eq', 'https://test-01.tech11.com/clerk-ui/');
        //expect homescreen button to be visible
        cy.wait(10000);
        cy.get('#home-screen-buttons', {timeout: 10000}).should('be.visible');

        //click on the RO button
        cy.get('#/risk-objects').click();
        cy.wait(5000);
        cy.url().should('eq', 'https://test-01.tech11.com/clerk-ui/#/risk-objects');
        cy.get('btn.btn-creation.btn-sm.mb-2', {timeout: 10000}).should('be.visible');

        //click on the create RO button if its showing
        cy.get('btn.btn-creation.btn-sm.mb-2').click();
        cy.get('#riskObjectDefinition').select('CAR');
        cy.wait(10000);





        })
})