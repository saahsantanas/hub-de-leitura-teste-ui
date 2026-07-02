/// <reference types= "cypress"/>
import catalogo from "../fixtures/livros.json"

describe('Funcionalidade: Busca no catálogo', () => {
    
beforeEach(() => {
    cy.visit('catalog.html')
});

it('Deve fazer a busca do livro 1984 com sucesso', () => {
    cy.get('#search-input').type('1984')
    cy.get('.card-title').should('contain', '1984')
});

it('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
    cy.get('#search-input').type(catalogo[2].Livro)
    cy.get('.card-title').should('contain', catalogo[2].Livro)
});

it('Deve fazer a bus de um livro usando Fixture', () => {
    cy.fixture('livros').then((cat) =>{
        cy.get('#search-input').type(cat[0].Livro)
        cy.get('.card-title').should('contain', cat[0].Livro)
    })   
});

it.only('Deve validar todos os livros da lista', () => {
    cy.fixture('livros').then((cat) => {
        cat.forEach(item => {
           cy.get('#search-input').clear().type(item.Livro)
           cy.get('.card-title').should('contain', item.Livro)  
        })
    })
});

});