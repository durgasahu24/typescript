//funtion
console.log("Hello function");
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// here void will not return any things
function greet(name) {
    console.log("hii ", "".concat(name));
}
// it is not good approach
// let combineFun:Function;//we can pass only function here we should not use it 
// combineFun = add;
// combineFun = 10; // Invalid
// console.log(combineFun(2,3));
// good approach 
var combineFun;
combineFun = add;
console.log(combineFun(2, 3));
function addHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addHandler(2, 3, function (data) {
    console.log(data);
});
