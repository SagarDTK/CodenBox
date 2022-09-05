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

        it("Scroll Down and Up",()=>
        {
            HomePage.loadHomePage()
            HomePage.scrollToBottom()
            HomePage.wait(3000)
            HomePage.scrollToUp()
        })
    })