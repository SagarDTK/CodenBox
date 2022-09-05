describe("Alias :",()=>
{

    it("Visit Website : ",()=>
    {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(2000)

    })

    it("Invalid username : ",()=>
    {

        cy.get("input[name='username']").as('username')
        cy.get("@username").clear()
        cy.get('@username').type('NoName',{delay:50})
    })



    it("Invalid password : ",()=>
    {

        cy.get("input[name='password']").as('password')
        cy.get("@password").clear()
        cy.get('@password').type('NoName',{delay:50})
    })
})