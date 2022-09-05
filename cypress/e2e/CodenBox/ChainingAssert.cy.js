describe("Chaining Assert : ",()=>
{
    it("Visit website :",()=>
    {
        cy.visit("https://codenboxautomationlab.com/practice/")
    })

    it("Assertion :",()=>
    {
        cy.get(".page-title").should('be.visible').and('contain','Automation Practice')
    })
})