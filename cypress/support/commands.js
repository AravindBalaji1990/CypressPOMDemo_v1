// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add('login', (email, password) => { 
//     // cy.get("#username").should('be.visible').clear()
//     cy.get(".css-tlfecz-indicatorContainer").first().click()
//     cy.get("#react-select-2-input").type(email)
//     cy.get("#react-select-2-input").type('{downarrow}')

//     cy.get("#password").should('be.visible')
//     cy.get("#react-select-3-input").type(password)

// })