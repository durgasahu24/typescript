// Union
// union symble symble => |


function addTwo (num1:number | string , num2 : number | string){

    if(typeof num1 == "number" && typeof num2 == "number")
    {
        return num1 + num2;
    }
    else 
    {
        return num1.toString() + num2.toString();
    }
    
}


console.log(addTwo(2,3));
console.log(addTwo("hello ","world"))


//Literal types
//we create our own type 
// function combind(num1:number | string , num2 : number | string , conversionType:"as-string" | "as-number"){

//     if(typeof num1 === "number" && typeof num2 === "number"  ||  conversionType ==="as-number")
//     {
//         return +num1 + +num2;
//     }
//     else 
//     {
//         return num1.toString() + num2.toString();
//     }
    
// }


// combind(2,3,"as-number")
// combind("hello ","world","as-string") 


//Type Alias / Custom types 
type Combinable = number | string | boolean //(here varible always will be capital letter)


function combind(num1:Combinable , num2 : Combinable , conversionType:"as-string" | "as-number"){

    if(typeof num1 === "number" && typeof num2 === "number"  ||  conversionType ==="as-number")
    {
        return +num1 + +num2;
    }
    else 
    {
        return num1.toString() + num2.toString();
    }
    
}


combind(2,3,"as-number")
combind("hello ","world","as-string")

type User = {
    name:string;
    age:number;
    // skills:string[];//  it we define any type of keys it must be there in Object
}

const user:User = {
    name:"Patel",
    age:22
}


function greet(user:User)
{
    console.log(`hii ${user}`)
}



