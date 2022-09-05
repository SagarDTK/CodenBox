describe("Alert : ",()=>{

    it("Visit Website :",()=>{

        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.url().should('include','codenbox')
        cy.wait(3000)

    })

    it("Verify Alert Window : ",()=>
    {
        cy.get("#alertbtn").click()

        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page who love to learn automation')
        })
        
    })

    it("Verify Confirm Window : ",()=>
    {
        cy.get("#confirmbtn").click()

        cy.on('window:confirm',(str)=>
        {
        expect(str).to.equal('Hello , Are you sure you want to confirm? ')
        })
        
    })

})