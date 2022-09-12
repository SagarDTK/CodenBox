describe("Intercwept with Cypress Example :",()=>{

    it("Test API with simple intercept stubbing : ",()=>{

        cy.visit("https://jsonplaceholder.typicode.com/")

        cy.intercept({

            path:'/posts'           

        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter =>{

            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            //expect(inter.response.body).to.have.length(100)
        })

    })

    /*
    it("Mocking with intercept test with static response :",()=>{

        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET','posts',{totalpost:5,name:'naveen'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')


    })
    */

})