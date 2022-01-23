describe('The MadLibs Main Form', () => {
    it('loads successfully', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-cy=Header]').should('be.visible').within(() => {
            cy.get('[data-cy=HowReload]').should('contain.text', 'Edit src/App.tsx and save to reload.')
            cy.get('data-cy=LearnReact').should('contain.text', 'Learn React')
        })
    })
})