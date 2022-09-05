describe("Scroll Up or Down : ",()=>
{
    it("Visit website :",()=>
    {
        cy.visit("https://codenboxautomationlab.com/")

        //Environment variable 
        //cy.visit(Cypress.env('url'))
    })

    it("Scroll Up & Down",()=>
    {
        cy.wait(3000)
        cy.contains('Contact Us').scrollIntoView()
        cy.wait(3000)
        cy.contains('Welcome to CodenBox AutomationLab').scrollIntoView()

    })
})