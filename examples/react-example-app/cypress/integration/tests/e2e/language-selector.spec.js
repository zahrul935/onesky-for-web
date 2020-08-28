describe('the home page', () => {
    it('successfully loads', () => {
        cy.visit('onesky.clickvalley.in')
    })
    it('select language', () => {
        cy.get('body > language-selector > select').select('简体中文 (中国)')
        cy.contains('简单句子')
        cy.contains('Message Not in Component Example: react-intl-universal 能够使消息不在 React.Component 中国际化')
    })
    it('select different language', () => {
        cy.get('body > language-selector > select').select('English (US)')
        cy.contains('Simple Sentence')
        cy.contains('This is <script>alert("ReactIntlUniversal prevents from xss attack")</script>')
    })
})