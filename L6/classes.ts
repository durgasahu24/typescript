/*
//Class exmaple 
class Person {
    name:string;
    age:number;

    constructor(name:string,age:number)
    {
        this.name = name;
        this.age = age;
    }

    getValue()
    {
        console.log(`${this.name} is good boy its age is ${this.age}`)
    }
}


const obj = new Person("Abhishek",33);
obj.getValue();
*/


//readOnly : we can instialised only one time like readOnly id
//Access modifier(private ,public and readonly)
//by deaulter access specifier is public
/*
class Person{
    // name:string;
    // age:number;
     private AllEmp:number[] = [];

    // constructor(name:string,age:number)
    // {
    //     this.name = name
    //     this.age = age
    // }


     addValue(num:number)
     {
        this.AllEmp.push(num)
     }

     showArr()
     {
        console.log(this.AllEmp);
     }
}

let obj = new Person();
obj.addValue(22);
obj.showArr();
// obj.AllEmp = []; // because of this we need to make private
obj.showArr();
*/



/*
//Inheritance ,override 
class person {

    name:string;
    age:number;
    emp:number[]=[];

    constructor(name:string,age:number)
    {
        this.name = name;
        this.age = age
    }


    greet()
    {
        console.log(`${this.name} is good boy . His age is ${this.age}`)
    }

    addVal(num:number):void
    {
        this.emp.push(num)
    }
}

class son extends person{
    grade:number;
    constructor(name:string,age:number,grade:number)
    {
        super(name,age);
        this.grade = grade
    }

    study()
    {
        console.log(`${this.name} grade is ${this.grade}`);
    }

    addVal(num: number): void {
        if(num == 33) return;
        this.emp.push(num);
    }

    showVal()
    {
        console.log(this.emp);
    }
}

let obj = new son("Ravi",11,7.8);
obj.greet();
obj.study();
obj.addVal(22);
obj.addVal(33);
obj.addVal(44)
obj.showVal();
*/



// Abstract class (it's like a blue print ). We can declare but not intailzed 

/*
abstract class Animal
{
    constructor(public name:string){}


   abstract makeSound():void

    move():void{
        console.log(`${this.name} is moving around `)
    }
}

// sub class will be alway form captial letter
class Dog extends Animal{

    makeSound(): void {
        console.log("Bhao Bhao")
    }
}


let obj  =  new Dog("Tummy");
obj.makeSound();
obj.move();
*/


/*
//getter and setter 
class Student {
  private _age: number = 0;

  // Setter: used to assign value with validation
  set age(value: number) {
    if (value < 0) {
      console.log("Age cannot be negative!");
      return;
    }
    this._age = value;
  }

  // Getter: used to access value safely
  get age(): number {
    return this._age;
  }
}

const s1 = new Student();
s1.age = 21;   // ✅ OK
s1.age = -5;   // ❌ Invalid, warning shown
console.log(s1.age); // 21
*/


/*
// Static :- in static method we don't need to create obj of a class we can directly acces property . we can't access through it class intstance (obj)
class college {

    static quality()
    {
        console.log("All student are good body")
    }
}
college.quality();
*/




