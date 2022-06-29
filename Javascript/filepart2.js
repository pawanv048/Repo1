//compile code.

//compliation phases Three steps

//Tokenizing/Lexing.--means code is divided into smaller parts
//parsing.- means which variable belong to which scope and the in which scope variable can be accessed
//code generation.

//compliation phase: 
//Early error checking.
//Determining Approprate scope for variable.

//code exection phase
//in javascript code exection inside excutions context
// window is an object provided by browser and which content key value pairs //global memory 

// Global Execution context.--when we enter into GEC variable is being created
// creation phases.
// code exection phases.

 // In ECMA scrip global object is nothing but a window object

 // Javascript is nothing but a Synchrorous programming language 
 // javascript is "single threaded" means when excution of first line completed after then, second line is being excution.
 // this : window object

 console.log(this)
 console.log(window)
 console.log(firstName)
 var firstName = 'Pawan verma'
 console.log(firstName)

 ////function declaration
 //In declaration function is stored inside memory as it is,
 //  
 function learning(){
     return 'we are learning javascript';
 }

 ////function expression
// function expression is stored in memory as varible
console.log(learn) // undefined

 var learn = function(){
    console.log('this is my function')
 }

 // In Global memory ma window object hota hai, which is provided by browser.


 // let and const are host state
 // TDZ: Temporal dead zone // when variable is uninitialize
// hosting :  let and const are hosted.
 //Uncaught ReferenceError:
 
 //console.log(learn1) // error: Cannot access 'learn1' before initialization.
 let learn1 = function(){
    console.log('this is my function')
 }



 //Hoisted
//  In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.


// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared



//This will result in a ReferenceError:
// carName = "Volvo";
// let carName;

// carName = "Volvo";
// const carName;


//// function execution context

let foo = 'foo';
console.log(foo)

function getFullName(firstName, lastName){
    console.log(arguments.length) // argument save arrays like object
    let myVar = 'variable inside func';
    console.log(myVar)
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName('pawan', 'verma');
console.log(personName )

// Understanding exectution

//firstly person GEC: in this memory creation phase hota and exection phase
//--> goes inside stack exectution where GEC perform first

//stack: GEC, FEC

//Global Execution phase:

//Function Execution phase:
//code Execution: all the code is executed , when getfullname with execution is set to 
//Local memory creation phases 0: argument: [...], myVar: uninitalized, firstName: pawan, lastName: verma, fullName: uninitalized
// argument save like array like object means give index and length.


//Memory creation phase: window: {} , this: this let uninitalized, getFullName: store as function, const: uninitalized

//Memory creation phase1: window: {} , this: this, let: foo, getFullName: store as function, const: uninitalized



//### lexical enviroment and scope chain
//1
const lastName1 = 'sharma'

//2
const printName = function(){
    const firstName1 = 'harshit'
    console.log(firstName1)
    console.log(lastName1)
}

//3
printName();

//Memory creation: window: {}, this: window, lastName1: uninitalized, printName: treated as varible first ,uninitalized
// memory execution push into stack, first execute global context

//code Execution: 


//--> second phase
//Memory creation: window: {}, this: window, lastName1: sharma, printName: function, printName 3line: calling function
// memory execution push into stack, execute function context

//code Execution: 1,2 executed 

//third phase
// local Memory creation: arugument: array like, firstname : harshit, lastname : sharma
// memory execution push into stack, execute function context

//code Execution: 1,2 executed 
