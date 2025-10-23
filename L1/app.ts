//number,string,boolean
function add (num1:number,num2:number,printVal:boolean,someText:string){
    if(printVal)
    {
        console.log(printVal);
    }
    return num1 + num2
}

const n1 = 23;
const n2 = 33;

const ans = add(n1,n2,true,"hello world");
console.log("ans ",ans); 


let firstName:string = "Ramesh"