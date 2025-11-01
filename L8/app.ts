// Generics intro (one is connected to another type)

const fruits: Array<string> = [];
fruits.push("mango");

type Person = {
  name: string;
  age: number;
};

const Boy: Person = {
  name: "Ramesh",
  age: 22,
};

const testArr: Array<Person> = [];

testArr.push({ name: "abhi", age: 33 });

console.log(testArr);

// function merge (obj1:Object,obj2:Object)//this is not good practic
function merge<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const res = merge({ name: "Ravi" }, { role: "Software Engineer" });

console.log(res);

// Generics Contraints

function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
): { key: T; value: U; isActive: V } {
  return { key, value, isActive };
}

console.log(createObject("Ravi", 22, true));

// Generic Interface

interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 33 };
console.log(numberBox);
const stringBox: Box<string> = { value: "Ravi" };
console.log(stringBox);

// Generics Default

interface User<T = string> {
  data: T;
  status: number;
}

type person2 = {
  name: string;
  age: number;
};

const response: User<number> = { data: 22, status: 22 };
console.log(response);
const res2: User = { data: "Ravi", status: 33 };
console.log(res2);
const res3: User<person2> = { data: { name: "Ravi", age: 22 }, status: 33 };

// Genericts with class
class Container<T> {
  private content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent():T{
    console.log("hello kese ho aaj log")
    return this.content;
  }
}

const stringContainer = new Container<string>("Hello wold");

console.log(stringContainer.getContent());


// Generic with Array 

function getFuntion <T> (arr:T[]){
    return arr[0];
}


const firstNum = getFuntion([1,2,3,4,5]);
const secondNum = getFuntion(["ravi","mohan"]);

console.log(firstNum);
console.log(secondNum);

// Generic with keyof 


const person = {key : 'mernstack'};
console.log(person['key']);

// function gerProperty(obj:object , key : string)
// {
//   return obj[key]
// }
// const res3 = gerProperty({},"name");
// console.log(res3);


function getProperty <T extends object , U extends  keyof T>(obj : T , key :U):T[U]
{
  return obj[key]
}

const person4 = {name:"Patel",age:21}
console.log(getProperty(person4,"name"))

