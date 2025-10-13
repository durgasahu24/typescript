// Union
//symble => |
function addTwo(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
console.log(addTwo(2, 3));
console.log(addTwo("hello ", "world"));
//Literal types
//we create our own type 
