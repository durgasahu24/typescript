// Unknown , any

// let userInput : unknown ;
let userInput : any;
let userName : string;

userInput = 10;
userName = "patel"
userName = userInput // it will show error in case of unkown;


//never return type (it will not return anything)
function generateError(message:string,code:number)
{
    throw {message:message,statusCode:code}
}

generateError("internal server error",500);

