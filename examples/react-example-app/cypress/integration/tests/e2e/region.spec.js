describe('the home page', () => {
    it('successfully loads', () => {
        cy.visit('onesky.clickvalley.in')
    })
    it('select region china', () => {
        cy.get('body > region-selector > select').select('China')
        cy.contains('Redirected to cn site')
    })
    it('select region Japan', () => {
        cy.get('body > region-selector > select').select('Japan')
        cy.contains('Redirected to jp site')
    })
    it('select region Taiwan', () => {
        cy.get('body > region-selector > select').select('Taiwan')
        cy.contains('Redirected to tw site')
        
    })
    it('select region United State', () => {
        cy.get('body > region-selector > select').select('United States')
        cy.contains('Redirected to us site')
    })
    it('select region Russia', () => {
        cy.get('body > region-selector > select').select('Russia')
        cy.contains('Redirected to rs site')
    })
})