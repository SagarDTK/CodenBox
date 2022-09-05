describe("Dropdown : ",()=>
{
    it("Visit website",()=>
    {
        cy.visit("https://codenboxautomationlab.com/practice/")

        cy.get("#dropdown-class-example").select("Selenium").should('have.value','option1')

        cy.get("input[id='autocomplete']").type("Can")

        cy.get("li[class='ui-menu-item'] div").each(($el,index,$list)=>
        {

            if($el.text()==='Canada')
            {
            cy.wrap($el).click()
            }
            
        }) 
           
       
    })
})

