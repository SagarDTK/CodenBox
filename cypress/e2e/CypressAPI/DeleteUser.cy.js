

describe("Post user request :",()=>{

    let accessToken='4b36524a5053f6288d577ad400c81e8a5906ab5a97d9b7c73f701f6a24152709';
    
    let randomText=""
    let testEmail=""
    
        it("Create User Test Function :",()=>{
    
            var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

            cy.request({
    
                method:'POST',
    
                url:'https://gorest.co.in/public/v2/users',
    
                headers:{
                    'authorization':"Bearer 4b36524a5053f6288d577ad400c81e8a5906ab5a97d9b7c73f701f6a24152709"
                },
                body:{
    
                    "id": 4252,
                    "name": "Thomas Muller TM",
                    "email": "tm@gmail.com",
                    "gender": "male",
                    "status": "inactive"
                },
             
            }).then((res)=>{
                    cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(201)
                    expect(res.body).has.property('email',"tm@gmail.com")
                    expect(res.body).has.property('name','Thomas Muller TM')
                    expect(res.body).has.property('gender','male')
                    expect(res.body).has.property('status','inactive')
                        
                }).then((res)=>{
    
                    //const userID=res.id
                    //cy.log("USer ID is : "+userID)
    
                    cy.request({
    
                        method:'DELETE',
                        //url:'https://gorest.co.in/public/v2/users/'+userID,
    
                        url:'https://gorest.co.in/public/v2/users/4252',
    
                        headers:{
                            'authorization':'Bearer 4b36524a5053f6288d577ad400c81e8a5906ab5a97d9b7c73f701f6a24152709'
                        }

                    }).then((res)=>{
    
                        cy.log(JSON.stringify(res))
                        expect(res.status).to.eq(204)
                        
                    })
                
                })
        })
    })