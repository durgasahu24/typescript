// Object , Array , Tuple , Enum

//object
const person: {
    firstName:string;
    age:number;
    xyz:object;
    skills:string[];//array
} = {
    firstName:"Patel",
    age:21,
    xyz:{
        address:"Rishikesh"
    },
    skills:["Ramesh","Hari"]
}

console.log(person)



//Array 
let favoriteLanguage:string[] = ["hindi","English"];
let favoriteLanguage2:number[] = [22];

let favoriteLanguage3:any[] //here array can be any type (we should avoid any type)


//Tuple
//Tuple :- fixed array of type 
const person2:{
    name:string;
    age:number;
    product:[number,string]
} = {
    name:"hari",
    age:23,
    product:[22,"hari"]
}

console.log(person2.product)
person2.product[0] = 33;
console.log(person2.product[0])


//enum

enum Role {ADMIN,AUTHER,READ_ONLY}


const person3 = {
    name:"patel",
    age:21,
    skills:["React","Node"],
    product:[10,"Macbook"],
    role:Role.ADMIN
}


if(person3.role === Role.AUTHER)
{
    console.log("AUTHER")

}
else if(person3.role === Role.ADMIN)
{
    console.log("ADMIN")

}




