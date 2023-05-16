// <reference types="cypress" />

describe('Inscription', () => {
    it('Inscription valide', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#firstName').type("Dick")
        cy.get('#lastName').type("Grayson")
        cy.get('#signup-email').type("dickgrayson@gmail.com")
        cy.get('#signup-password').type("BatfamIsTheBest")
        cy.get('[data-qa="signin-submit-button"]').click()
        });
    it('Inscription invalide car pas de mot de passe', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#firstName').type("Dick")
        cy.get('#lastName').type("Grayson")
        cy.get('#signup-email').type("dickgrayson@gmail.com")
        cy.get('[data-qa="signup-submit-button"]').click()
        cy.get('[class="flex items-baseline mt-2 text-primary-light peer-disabled:text-primary-disabled body-2-light !text-danger"]').contains('Le champ mot de passe est obligatoire')
    });
});

describe('Connexion', () => {
    it('Connexion réussie', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#signin-email').type("angelina.julie.dona@gmail.com")
        cy.get('#signin-password').type("Morlina123")
        cy.get('[data-qa="signin-submit-button"]').click()
    });
    it('Connexion échouée car mot de passe invalide', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('[data-qa="accept-cta"]').click()
        cy.get('#signin-email').type("angelina.julie.dona@gmail.com")
        cy.get('#signin-password').type("umjvze")
        cy.get('[data-qa="signin-submit-button"]').click()
        cy.get('[class="text-red-700 mt-4 body-2-light"]').contains('Saisissez un e-mail et un mot de passe valides.')
    });
});