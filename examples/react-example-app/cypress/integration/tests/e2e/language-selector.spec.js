describe('the home page', () => {
    it('successfully loads', () => {
        cy.visit('onesky.clickvalley.in')
    })
    it('select language', () => {
        cy.get('body > language-selector > select').select(indonesia )')
        cy.contains('简单句子')
        cy.contains('Message Not in Component Example: react-intl-universal indonesia  React.Component indonesia )
    })
    it('select different language', () => {
        cy.get('body > language-selector > select').select('indonesia  (indonesia )')
        cy.contains('Simple Sentence')
        cy.contains('This is <script>alert("ReactIntlUniversal prevents from xss attack")</script>')
    })
})
