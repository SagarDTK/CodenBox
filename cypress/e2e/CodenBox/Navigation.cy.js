describe("Navigation : ",()=>
{
    it("Visit website :",()=>
    {
        cy.visit("https://codenboxautomationlab.com/")

        cy.contains('Selenium Automation').click({force:true})

        cy.go("back")

        cy.get('#post-2 > div > h3 > span').invoke('text').then((textofElement)=>
        {
            expect(textofElement.trim()).to.equal('Welcome to CodenBox AutomationLab')

            cy.go('forward')
        })

    })

})