/// <reference types= "cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()

    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
        let email = `sarah${Date.now()}@teste.com`
        cy.get('#name').type('Sarah Sant')
        cy.get('#email').type(email)
        cy.get('#phone').type('11960586877')
        cy.get('#password').type('sarah123')
        cy.get('#confirm-password').type('sarah123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //resultado esperado
        cy.url().should('include', 'dashboard')
    });


    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11960586877')
        cy.get('#password').type('sarah123')
        cy.get('#confirm-password').type('sarah123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = `sarah${Date.now()}@teste.com`
        cy.preencherCadastro(
            'Sarah Sant',
            email,
            '11960586877',
            'sarah123',
            'sarah123'
        )
        //Resultado esperado
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso - Usando Page Objects', () => {
        let email = `sarah${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Sarah Sant', email, '11995407766', 'sarah123', 'sarah123')
        cy.url().should('include', 'dashboard')
    });

    it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        cadastroPage.preencherCadastro('', 'sarah@teste.com', '11995407766', 'sarah123', 'sarah123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

});