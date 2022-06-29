
function myFunc(){
    return 1
}
const test = myFunc();
console.log(test)


function myFun(){
    return 'hello world'
}
const test1 = myFun();
console.log(test1)

// returning array

function myFunArray(){
    return [1,2,3]
}
const test2 = myFunArray();
console.log(test2)

// creating key value pair object

function creatingobj(){
    return { a: '1'};
}

const test3 = creatingobj();
console.log(test3)

//function return function
function outerFunction(){
    function innerFunction(){
        console.log('hello world')
    }
    return innerFunction;
}

const tute = outerFunction();
console.log(tute)

///function return function
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName,lastName)
    }
    return printName;
}

const ans = printFullName('Rahul', 'singh')
//console.log(ans)
ans();


function hello(x){
    const a = 'vara'
    const b = 'varb'
    return function(){
        console.log(a,b,x)
    }
}
const test4 = hello('arg')
test4();

// writting a function to creating squre.

// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }

// const squre = myFunction(2)
// const ans2 = squre(22)
// console.log(ans2)

// const cube = myFunction(3)
// const ans3 = cube(3)
// console.log(ans3)

//By using arrow function
// no need of return as well as brackets for single parameters only to defined function

const myFunction = power => number => number ** power

const squre = myFunction(2)
const ans2 = squre(10)
console.log(ans2)

const cube = myFunction(3)
const ans3 = cube(5)
console.log(ans3)




// approching closer
function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log('Hi!! i am called')
            counter++
        }else{
            console.log('Hey!! I am already called.')
        }
    }
}

const anyvar = func();

anyvar()
anyvar()

