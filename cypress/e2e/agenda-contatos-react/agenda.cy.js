
describe('testes para da agenda de contatos',()=>{
   beforeEach(()=>{
    cy.visit('https://agenda-contatos-react.vercel.app/')

    
   })

   it('deve cadastrar o contato',()=>{
    cy.get('input').should('have.length',3)
    cy.get('[type="text"]').type('joao')
    cy.get('[type="email"]').type('joao@hotmail.com')
    cy.get('[type="tel"]').type('81912345678')
    cy.get('button[class="adicionar"]').click()
    cy.screenshot('teste de cadatro')
   })

   it('testando edicao',()=>{
    cy.get('[class="edit"]').click()
    cy.get('[type="text"]').clear().type('joaozinho')
    cy.get('[type="email"]').clear().type('joaozinho@hotmail.com')
    cy.get('[type="tel"]').clear().type('81987654321')
    cy.get('#root > div > div > div > form > div > button.alterar').click()
    cy.screenshot('teste de edicao')
   })

   it('testando remocao',()=>{
      cy.get(' button.delete').click()
      cy.screenshot('teste de remocao')
    })
    
})

