//number,string,boolean
function add(num1, num2, printVal, someText) {
    if (printVal) {
        console.log(printVal);
    }
    return num1 + num2;
}
var n1 = 23;
var n2 = 33;
var ans = add(n1, n2, true, "hello world");
console.log("ans ", ans);
