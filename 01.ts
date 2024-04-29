type User = {
  name: string ;
  email : string ;
  isSetPassword : boolean;
}

const Point = (user : User) : User => {
     return {
        name : "Zahid",
        email : "Zahid22@gmail.com",
        isSetPassword : false,
     }
}   
const result = Point( 
    {
    name : "Zahid",
    email : "Zahid22@gmail.com",
    isSetPassword : false,
 }
 )

 console.log(result)

export {};