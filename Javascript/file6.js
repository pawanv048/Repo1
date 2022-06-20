//FUNCTIONS

//simple function
// invoked, call are similar for function call
function birthdaySong() {
    console.log('happy birthday day to ashvani sir..')
}

//num1, num2 are paramaters
function sumOFTwoNumbers(num1, num2) {
    return num1 + num2
}

//9, 10 are the Argument
const returnValue = sumOFTwoNumbers(9,10)
//const returnValue = sumOFTwoNumbers() //output NaN(Not a number)
console.log(returnValue)

// function isEven(number){
//     if(number%2 === 0){
//         return true
//     }else{
//         return false
//     }
// }
//or 

function isEven(number) {
     return number % 2 === 0;
}

console.log(isEven(4))

// function firstChar(anyString){
//     return anyString[0];
// }

console.log(firstChar("pawan"))

//function for find the target

function findTarget(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}

const myArray = [1,5,6,7,10];
const ans = findTarget(myArray, 7)
console.log(ans)

//function declaration

function firstChar(anyString){
    return anyString[0];
}


//function expression
// const firstChar = function(anyString){
//     return anyString[0]
// }

//### Arrow function 
//mostly used in application

const singAsong = () => {
    console.log('Tu meri mai tera')
}
singAsong()

// const isEven = number => number%2 === 0 //single line function no need of parnthesis in case of one parameters



//****** Hosting */

//function inside function

 function App(){
     const myFunc = () => {
         console.log('hello this is first call')
     }
     const addTwoNumbers = () => {
         console.log(3+8)
     }
     const multi = () => {
         console.log(5*4)
     }
     console.log('inside function')
     multi()
 }
 App()
 

 //lexical scope
 //lexical environment
 // myVar3 are in global scope
 // Note: in function inside function we need to call main function then after we have to call sub function inside scope.

 const myVar3 = 'value 3'

 function iconChanger() {
     console.log ('we are inside')
    
     function insidenest () {
        const isMyFunc = () => {
            const myVar3 = 'value 45'
            console.log('print inside isMyFunc', myVar3)
        }
        isMyFunc()
     }
     console.log(myVar3)
     insidenest()
 }
 iconChanger()


 //****Block scope */
 //use in application
 //Block scope vs function scope


 {
     let lastName = 'verma'
     console.log(lastName)
 }


 {
    let lastName = 'sharma'
    console.log(lastName)
}

let lastName = 'singh'
    console.log(lastName)
//Note: in every block each varible defined inside block accessible inside only.


{
    //let firstName = 'pawan'
    const firstName = 'pawan'   
}
//console.log(firstName)
//Note: we can't access block varible outside when it declare as let or const.


//Var is a functional scope 

{
    var firstName = 'Swetabh'
}
    console.log(firstName)
//Note: only case of var we can access stored value outside of the block var can be accessible in anywhere in javascript.


//#####Default Parameters

//Before ES15

function addTwo(a,b){
    if (typeof b == "undefined"){
        b=0
    }
    return a + b;
}

const sum = addTwo(5,8)
console.log(sum)

//After ES15

function addThree(a,b,c=0){
    return a+b+c;
}

const threeSum = addThree(7,8)
console.log(threeSum)
//Note: undefind varible default value declared inside paranthesis.

//######rest parameter
//rest (...) array is assigned
function myFunc(d,e,...f) {
    console.log(`d is ${d}`)
    console.log(`e is ${e}`)
    console.log(`f is `,f)
}

myFunc(2,3,3,4,6,7,8)

function allSum(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total
}

const vns = allSum(7,4,4,5,2,6)
console.log(vns)

// ####param destructuring
// use it with object 
// use for react

const student = {
    studentName: 'Rahul',
    gender: 'male'
}

// function studentDetail(obj){
//     console.log(obj.studentName),
//     console.log(obj.gender)
// }

function studentDetail({studentName,gender}){
    console.log(studentName),
    console.log(gender)
}

studentDetail(student)


/// Callback function
// Taking any function as input and call it.
function myFunc(age){
    //console.log(a)
    
    console.log('hello world!! we are using callback i am second call')
    console.log(`your age is ${age}`)
}

function myFunc2 (callback){
    console.log('Hey there!! This is callback function first call')
    callback('22')
}
// myFunc([2,3,4])
//myFunc({name: 'pawan'}) //object pass
//myfunc "input as a function "
myFunc2(myFunc)
//we are passing function inside function that is callback

//##### Function returning function

function firstFunc() {
    function secondFunc() {
        console.log('function returning function')
    }
    return secondFunc;
}
const rtnValue = firstFunc()
console.log(rtnValue)
