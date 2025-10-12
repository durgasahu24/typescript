// Object , Array , Tuple , Enum
//object
var person = {
    firstName: "Patel",
    age: 21,
    xyz: {
        address: "Rishikesh"
    },
    skills: ["Ramesh", "Hari"]
};
console.log(person);
//Array 
var favoriteLanguage = ["hindi", "English"];
var favoriteLanguage2 = [22];
var favoriteLanguage3; //here array can be any type (we should avoid any type)
//Tuple
//Tuple :- fixed array of type 
var person2 = {
    name: "hari",
    age: 23,
    product: [22, "hari"]
};
console.log(person2.product);
person2.product[0] = 33;
console.log(person2.product[0]);
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHER"] = 1] = "AUTHER";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
var person3 = {
    name: "patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook"],
    role: Role.ADMIN
};
if (person3.role === Role.AUTHER) {
    console.log("AUTHER");
}
else if (person3.role === Role.ADMIN) {
    console.log("ADMIN");
}
