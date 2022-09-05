describe("Custom Commands : ",()=>
{
    it("Visit website :",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Custom Commands :",()=>
    {
        //GOTO command.js file for Login()
        cy.Login("Admin","admin123")

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('contain','CSRF token validation failed')

        //cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should('contain','CSRF token validation failed')
    })
})