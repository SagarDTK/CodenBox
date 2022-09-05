describe("Checkbox : ",()=>{

    it("Checkbox :",()=>{

        cy.visit("https://codenboxautomationlab.com/practice/")

        //check and assert 
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")

        //check and uncheck
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

        //double check using common attribute
        cy.get("input[type='checkbox']").check(['option1','option2'])
    })
})