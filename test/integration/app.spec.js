const name = 'Marco'

describe('Example 1', () => {
  it('Shows Hello, World', () => {
    cy.visit('/')
    cy.get('[data-cy=btn-hello-world]').click()
    cy.contains('Hello, World')
  })
})

describe('Example 2', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Defaults to "Hello, World"', () => {
    cy.get('[data-cy=btn-hello-name]').click()
    cy.contains('Hello, World')
  })

  it(`Shows "Hello, ${name}"`, () => {
    cy.get('[data-cy=input-hello-name]').type(name)
    cy.get('[data-cy=btn-hello-name]').click()
    cy.contains(`Hello, ${name}`)
  })
})

describe('Example 3', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.server()
    cy.route('POST', '/.netlify/functions/hello-name-post').as('postName')
    cy.route('GET', '/.netlify/functions/hello-name-post**').as('getName')
  })

  it('Defaults to "Hello, World"', () => {
    cy.get('[data-cy=btn-hello-name-post]').click()
    cy.contains('Hello, World')
    cy.wait('@postName')
      .its('method')
      .should('eq', 'POST')
  })

  it(`Shows "Hello, ${name}"`, () => {
    cy.get('[data-cy=input-hello-name-post]').type(name)
    cy.get('[data-cy=btn-hello-name-post]').click()
    cy.contains(`Hello, ${name}`)
    cy.wait('@postName')
      .its('method')
      .should('eq', 'POST')
  })

  it(`Throws error 405 Method Not Allowed`, () => {
    cy.get('[data-cy=btn-hello-name-post-error]').click()
    cy.wait('@getName').then(xhr => {
      expect(xhr.status).to.equal(405)
      expect(xhr.method).to.equal('GET')
    })
    cy.contains(`405`)
  })
})

describe('Example 4', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.server()
    cy.route('GET', '/.netlify/functions/random-cat**').as('getName')
  })

  it('Defaults to Meow', () => {
    cy.get('[data-cy=btn-random-cat]').click()
    cy.wait('@getName')
      .its('response.body')
      .should('include', 'Meow')
    cy.contains('Hello, World')
    cy.get('[data-cy=img-random-cat]').should('be.visible')
  })

  it(`Shows "Hello, ${name}"`, () => {
    cy.get('[data-cy=input-random-cat]').type(name)
    cy.get('[data-cy=btn-random-cat]').click()
    cy.wait('@getName')
      .its('response.body')
      .should('include', name)
    cy.get('[data-cy=img-random-cat]').should('be.visible')
  })
})
