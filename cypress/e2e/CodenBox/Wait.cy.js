describe("Wait : ",()=>{

    it("Visit Website :",()=>{

        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.url().should('include','codenbox')
        cy.wait(3000)

    })

    it("Pause : ",()=>{
a
        cy.pause()
    })

    it("Check correct element on the page :",()=>{

        cy.get(".page-title").should('be.visible')
    })
    
    cy.log("Wait program :")

})