// added type Guards

type combinable = string | number;
type numeric  = number | boolean;

type universal = combinable & numeric

function add(a:combinable , b : combinable)
{
    // add type guards 
    if(typeof a === "string"  || typeof b === "string")
    {
       return a.toString()+b.toString();
    }
    return a+b;
}

console.log(add(20,30));
console.log(add("20",30));


type Admin = {
    name:string;
    privillage:string[]
}

type Employee = {
    name:string;
    startDate:Date
}


type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

const emp1:ElevatedEmployee = {
    name:"ravi",
    privillage:["create Server"],
    startDate: new Date()
}


function printEmployeeInfo (emp1:UnknownEmployee)
{
    console.log("Name ",emp1.name);
    // console.log( "privillage ",emp1.privillage) // here we need type guards


    //adding type privaillage 
    if("privillage" in emp1) // this is how we deal guards here
    {
        console.log(emp1.privillage);
    }

}

printEmployeeInfo(emp1)


// type guards in class
class Car{
    drive()
    {
        console.log("Driving a car .....")
    }
}

class Truck {
    drive()
    {
        console.log("Truck a car .. ")
    }

    loadCargo(num:number)
    {
        console.log("number is ",num);
    }
}


type Vehicle = Car | Truck;

let v1 = new Car();
let v2 = new Truck();

function userVehicle(vehicle:Vehicle)
{
    vehicle.drive();
    // vehicle.loadCargo()

    // here we need guard
    if("loadCargo" in vehicle)
    {
        vehicle.loadCargo(22);
    }

    if(vehicle instanceof Truck)
    {
        vehicle.loadCargo(33);
    }
}

// type casting or type assersion
// we added htmlinpuelemtn so that we can get data into html input

// two ways to deals
// const userInput = <HTMLInputElement>document.getElementById("user-input")!; // html can not be null that's why used !
const userInput = document.getElementById("user-input") as HTMLInputElement
userInput.value = "hello world"
