/// <reference types= "cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {
    before(() => {
        cy.visit('login.html')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('sarah@teste.com')
        cy.get('#password').type('sarah123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('sarah@teste.com', "sarah123")
    });

    it('Deve fazer login com sucesso com conta Admin - Usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    });

it('Deve fazer login com sucesso - Usando importação da massa de dados', () => {
    cy.login(user.email, user.senha)
});

});