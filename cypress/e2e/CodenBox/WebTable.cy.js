describe("Web Table : ",()=>
{
    it("Visit website :",()=>
    {
        cy.visit("https://codenboxautomationlab.com/practice/")
    })

    it("Verify Appium name in the table : ",()=>
    {
      cy.get('table>tbody>tr').contains('td','Appium').should('be.visible')
    })

    it("Check condition logic in the table : ",()=>
    {    
       cy.get('table>tbody>tr td:nth-child(2)') .each(($el,index,$list)=>
       {
            var text=$el.text()

            if(text.includes('WebServices'))
            {
                cy.get('table>tbody>tr td:nth-child(3)').eq(index).then(function(price)
                {
                    var actualPrice=price.text()
                    expect(actualPrice).to.equal('30')
                    
                })
            }
       })
       
    })
})