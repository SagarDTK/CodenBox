describe("Get API user test",()=>{

let accessToken= '4b36524a5053f6288d577ad400c81e8a5906ab5a97d9b7c73f701f6a24152709'

    //By it.only only that it block will be executed 
    it.only("Get User Details",()=>{

        cy.request({

            method:'GET',

            url:'https://gorest.co.in/public/v2/users',

            headers:{
                'authorization':"Bearer 4b36524a5053f6288d577ad400c81e8a5906ab5a97d9b7c73f701f6a24152709"
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            //expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })


    it("Get User by ID : ",()=>{

        cy.request({

            method:'GET',

            url:'https://gorest.co.in/public/v2/users/3372',

            headers:{
                'authorization':"Bearer"+accessToken
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.name).to.eq('Rina Ziemann II')
        })
    })
})