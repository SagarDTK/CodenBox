describe("Locators :",()=>{

    it("Locators",()=>{

        cy.visit("https://codenboxautomationlab.com/practice/")
        //cy.get("input[value='radio1']").check()
        cy.get("#search-2 > #searchform > .search-input").type("ABC:")
    })

})