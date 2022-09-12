

describe("Post user request :",()=>{

let accessToken='4b36524a5053f6288d577ad400c81e8a5906ab5a97d9b7c73f701f6a24152709';

let randomText=""
let testEmail=""

    it("Create User Test Function :",()=>{

        var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        for(var i=0;i<10;i++)
        
            randomText+=pattern.charAt(Math.floor(Math.random()*pattern.length));
            testEmail=randomText+'@gmail.com'
        

        cy.request({

            method:'POST',

            url:'https://gorest.co.in/public/v2/users',

            headers:{
                'authorization':"Bearer 4b36524a5053f6288d577ad400c81e8a5906ab5a97d9b7c73f701f6a24152709"
            },
            body:{

                "id": 3666,
                "name": "Lizbeth  Toy",
                "email": testEmail,
                "gender": "male",
                "status": "active"
            }
        }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(201)
                expect(res.body).has.property('email',testEmail)
                expect(res.body).has.property('name','Lizbeth  Toy')
                expect(res.body).has.property('gender','male')
                expect(res.body).has.property('status','active')
                    
            }).then((res)=>{

                //const userID=res.id
                //cy.log("USer ID is : "+userID)

                cy.request({

                    method:'GET',
                    //url:'https://gorest.co.in/public/v2/users/'+userID,

                    url:'https://gorest.co.in/public/v2/users/3905',

                    headers:{
                        'authorization':'Bearer 4b36524a5053f6288d577ad400c81e8a5906ab5a97d9b7c73f701f6a24152709'
                    }
                }).then((res)=>{


                    expect(res.status).to.eq(200)
                    //expect(res.body).has.property('id',userID)
                    expect(res.body).has.property('email','SVGWOdTMCE123456@gmail.com')
                    expect(res.body).has.property('name','Lizbeth  Toy')
                    expect(res.body).has.property('gender','male')
                    expect(res.body).has.property('status','active')
                        
                })
            
            })
    })
})