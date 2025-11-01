// added type Guards
function add(a, b) {
    // add type guards 
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(20, 30));
console.log(add("20", 30));
var emp1 = {
    name: "ravi",
    privillage: ["create Server"],
    startDate: new Date()
};
function printEmployeeInfo(emp1) {
    console.log("Name ", emp1.name);
    // console.log( "privillage ",emp1.privillage) // here we need type guards
    //adding type privaillage 
    if ("privillage" in emp1) // this is how we deal guards here
     {
        console.log(emp1.privillage);
    }
}
printEmployeeInfo(emp1);
// type guards in class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car .....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Truck a car .. ");
    };
    Truck.prototype.loadCargo = function (num) {
        console.log("number is ", num);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function userVehicle(vehicle) {
    vehicle.drive();
    // vehicle.loadCargo()
    // here we need guard
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(22);
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(33);
    }
}
// type casting or type assersion
// we added htmlinpuelemtn so that we can get data into html input
// const userInput = <HTMLInputElement>document.getElementById("user-input")!; // html can not be null that's why used !
var userInput = document.getElementById("user-input");
userInput.value = "hello world";
