//class name can be small 

/*
class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
 }

  getDetail() {
    console.log("Department ",this.name);
  }
}

const obj = new Department("Accounting")
obj.getDetail();

const copyObj = {  // from here this value is going
    name:"patel",
    description:obj.getDetail
}

copyObj.description();
*/



//Access modifier(private ,public and readonly)
//by deaulter access specifier is public


/*
class Department {
    name:string;
    employee:string;
    // private AllEmp:string[] = [];
     AllEmp:string[] = [];
    constructor(name:string,emp:string)
    {
        this.name = name;
        this.employee =emp;
    }
    adEmployee(emp:string)
    {
        this.AllEmp.push(emp);
    }
    printval()
    {
        console.log(this.AllEmp)
    }
}
const obj = new Department("ramesh","accounting")
obj.adEmployee("ramesh")
obj.adEmployee("hari");
obj.printval();
// obj.AllEmp = ["1"];//from here we can change Allemp value tha't why we need private
// obj.printval();
*/



class school {
    name:string
    constructor(n:string)
    {
        this.name = n;
    }

    InterArr:string[] = []
    addVal()
    {
        this.InterArr.push(this.name);
    }

    getValue()
    {
        console.log(this.name);
    }
}

let obj =  new school("Ramesh");
obj.getValue();



//readOnly : we can instialised only one time like readOnly id


//inheritence, override properties && protected access modifier , getter , setter method

// class InCla extends Department {

//     constructor(name:string , emp:string)
//     {
//         super(name,emp);
//     }


    //override
    // adEmployee(emp: string): void {
    //     if(emp == "Patel")
    //     {
    //         return
    //     }
    //     this.AllEmp.push(emp);
    // }

    // get getter()
    // {
    //     if(this.adEmployee.length > 0)
    //     {
    //         console.log("All users");
    //     this.printval()
    //         return
    //     }
    //     else
    //     {
    //         throw new Error("Report not found");
    //     }
    // }

    // set setter()
    // {
    // same as above
        
    // }
// }

// const obj2 = new InCla("hari","syma");
// obj2.adEmployee("abhi");
// obj2.printval();
// obj2.adEmployee("Patel");
// obj2.printval();
// obj2.adEmployee("shivani");
// obj2.printval();
// obj2.getter;
// for setter obj2.setter = "";


//static method:- in which we don't kneed to use new method for create obj we can direct access property from class name 


// class School{
//     static child()
//     {
//         console.log("childs are great")
//     }
// }

// let obj3 = School.child();
// console.log(obj3); 



// abstract classes

