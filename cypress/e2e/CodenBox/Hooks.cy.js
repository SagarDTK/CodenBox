class BasePage
{
    static loadHomePage()
    {
        cy.visit("https://codenboxautomationlab.com/")
    }
    static wait(number) 
    {
        cy.wait(number)
    }
}
class HomePage extends BasePage
{
    static scrollToBottom()
    {
        cy.contains('Contact Us').scrollIntoView()
    }
    static scrollToUp()
    {
        cy.contains('Welcome to CodenBox AutomationLab').scrollIntoView()
    }
}
    describe("Inheritance between classes :",()=>
    {
        before(function()
        {
            //run once before all the test case executed
            //test cleanup
            //clean cookies 
            HomePage.loadHomePage()
        })

        after(function()
        {
            //run once after all the test case executed
            //setup test data
            //send or reset the database
            cy.clearCookies()
            cy.clearLocalStorage
        })

        beforeEach(function()
        {
            //runs before each it block in the describe
        })
        afterEach(function()
        {
            //runs after each it block in the describe
        })
    
        it("Scroll Down and Up",()=>
        {   
            HomePage.scrollToBottom()
            HomePage.wait(3000)
            HomePage.scrollToUp()
        })

    })
    
    