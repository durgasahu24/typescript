// Generics intro (one is connected to another type)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var fruits = [];
fruits.push("mango");
var Boy = {
    name: "Ramesh",
    age: 22,
};
var testArr = [];
testArr.push({ name: "abhi", age: 33 });
console.log(testArr);
// function merge (obj1:Object,obj2:Object)//this is not good practic
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var res = merge({ name: "Ravi" }, { role: "Software Engineer" });
console.log(res);
// Generics Contraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
console.log(createObject("Ravi", 22, true));
var numberBox = { value: 33 };
console.log(numberBox);
var stringBox = { value: "Ravi" };
console.log(stringBox);
var response = { data: 22, status: 22 };
console.log(response);
var res2 = { data: "Ravi", status: 33 };
console.log(res2);
var res3 = { data: { name: "Ravi", age: 22 }, status: 33 };
// Genericts with class
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        console.log("hello kese ho aaj log");
        return this.content;
    };
    return Container;
}());
var stringContainer = new Container("Hello wold");
console.log(stringContainer.getContent());
// Generic with Array 
function getFuntion(arr) {
    return arr[0];
}
var firstNum = getFuntion([1, 2, 3, 4, 5]);
var secondNum = getFuntion(["ravi", "mohan"]);
console.log(firstNum);
console.log(secondNum);
// Generic with keyof 
var person = { key: 'mernstack' };
console.log(person['key']);
// function gerProperty(obj:object , key : string)
// {
//   return obj[key]
// }
// const res3 = gerProperty({},"name");
// console.log(res3);
function getProperty(obj, key) {
    return obj[key];
}
var person4 = { name: "Patel", age: 21 };
console.log(getProperty(person4, "name"));
