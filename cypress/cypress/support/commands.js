//Command to click a link that contains a specified text
Cypress.Commands.add('clickLink', (label) => {
  cy.get('a').contains(label).click()
})
