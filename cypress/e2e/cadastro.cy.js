/// <reference types= "cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
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
        //Resultado esperado
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

});