//Interface 

/*
interface Person {
    name:string;
    age:number;
    greet(text:string):void;
}

let user:Person = {
    name:"Ramesh",
    age :33,
    greet:function(str):void
    {
        console.log(str)
    }
}

console.log(user.name);
*/


/*
//interface with class
interface Greetable {
    name:string;
    greet():void;
}


class Parent implements Greetable
{
    name: string;

    constructor (n:string)
    {
        this.name = n;
    }

    greet(): void {
        console.log(this.name , "hello")
    }
}


let obj  =  new Parent("Ajay");
obj.greet();
*/



/*
// extending interface 
interface Named {
    name:string;
}

interface Greetable extends Named{
    greet(text:string):void
}

class Parent implements Greetable {
    name:string;
    constructor(n:string)
    {
        this.name = n;
    }
    greet(text: string): void {
        console.log(this.name,"is a",text)
    }
}

let obj = new Parent("Mahesh");
obj.greet("good")
*/



/*
//function define ushing 
// type addFunc = (a:number , b:number) => number;

// function define ushing interface
interface addFunc {
    (n1:number,n2:number):number
}
let add : addFunc;
add = (n1:number , n2:number) => 
{
    return n1+n2;    
}
*/


/*
//opstinal
interface Named {
    readonly name :string,
    outputName?:string
}

class Person {
    name:string;
    constructor(n:string)
    {
        this.name = n;
    }
}
*/








