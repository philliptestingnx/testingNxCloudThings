import { getGreeting } from '../support/app.po';

describe('crew-e2e (2)', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    cy.wait(20000); // simulate slow test

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });

  it('should display welcome message.... (second)', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');
    console.log("testing something")

    cy.wait(20000); // simulate slow test

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });

  it('should display welcome message (third)', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    cy.wait(20000); // simulate slow test

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});
