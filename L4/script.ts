//funtion
console.log("Hello function")
function add(num1:number , num2 :number):number{
    return num1 + num2;
}

add(2,3);

// here void will not return any things
function greet(name:string):void{
    console.log("hii ",`${name}`)
}

// it is not good approach
// let combineFun:Function;//we can pass only function here we should not use it 

// combineFun = add;
// combineFun = 10; // Invalid
// console.log(combineFun(2,3));


// good approach 
let combineFun : (a:number,b:number) => number;

combineFun = add;
console.log(combineFun(2,3));

//function types and callbacks 

type Cb = (n3:number) => void;

function addHandler (n1:number,n2:number,cb:Cb)
{
    const result = n1 + n2;
    cb(result)
}

addHandler(2,3,(data:number) => {
console.log(data)
})






