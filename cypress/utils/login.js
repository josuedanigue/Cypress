// login.js
export function login(username = Cypress.env('username'), password = Cypress.env('password')) {
  // visit login page
  cy.visit(Cypress.env('baseUrl'));

  // type username and password
  cy.get('#username').type(username);
  cy.get('#password').type(password);

  // click login
  cy.get('#kc-login').click();

  // wait for dashboard to load
  cy.get('h1.display-1.m-5', { timeout: 10000 }).should('contain.text', 'tech11');
}
