describe("Alias :",()=>
{
    it("Assertion : ",() =>
    {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.url().should('include','codenbox')
    })  

    it("Check page element on webpage : ",()=>
    {
        cy.get(".page-title").should('be.visible')
    })

    it("Check length of an element : ",()=>
    {
        cy.get(".search-input").should("have.length",2)

    })

    it("Check text on element : ",()=>
    {
        cy.get("#openwindow").should("have.text","Open Window")
    })

    it("Check option 3 : ",()=>
    {
        cy.get("#checkBoxOption3").check().should("be.checked")
    })

    it("Select Appium : ",()=>
    {
        cy.get("#dropdown-class-example").select("Appium").should("have.value","option2")
    })

})

