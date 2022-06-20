//####### important methods in array

//forEach
//map
//filter
//reducer

const numbers = [3, 4, 5, 6]

function myFunc(number, index) {
    console.log(`index is ${index} number is ${number}`)
}

//complex approch

// for(let i=0; i<numbers.length; i++){
//     myFunc(numbers[i],i)
// }

//forEach call the callbackfn one time for each element of arrays
///Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.

numbers.forEach(myFunc)


//real world application;

const employ = [
    { "employeeName": 'pawan', salary: '1quadrill' },
    { "employeeName": 'Ashwini', salary: '4L' },
    { "employeeName": 'Akash', salary: '20L' }
]

//  employ.forEach(function(employ) {
//     //console.log(employ.employeeName)
//     console.log(employ.salary)
//  }) 

// same work use of "for of" loop

// for(let employes of employ){
//     console.log(employes.employeeName)
// }

// -->using arrow function

employ.forEach((employ, index) => {
    console.log(employ.employeeName, index)
})

// -->map method
// store array & as well as return array
const randomnumber = [3, 4, 5, 6]

// const square = function (randomnumber){
//     return randomnumber * randomnumber;
// }

//Map function inside map
// const squareNumber = randomnumber.map(square)
// console.log(squareNumber)

// const squareNumber = randomnumber.map(function(num){
//     return num * num
// })
// console.log(squareNumber)

//  MAP using arrow function

// const squareNumber = randomnumber.map((num)=>{
//     return num * num
// })
// console.log(squareNumber)

// Map using second params as index

const squareNumber = randomnumber.map((num, index) => {
    return `index: ${index},${num * num}`
})
console.log(squareNumber)

// Map in application

const workers = [
    { "Name": 'pawan', salary: '1quadrill' },
    { "Name": 'Ashwini', salary: '4L' },
    { "Name": 'Akash', salary: '20L' }
]
//worker is nothing but a call back function
const workerNames = workers.map((worker) => {
    return worker.Name
});
console.log(workerNames)

//##### filter Method

const numberss = [5, 4, 8, 41, 32, 44, , 57, 78]

//create callback function

const isOdd = function (numb) {
    //return numb%2===1;
    return numb % 2 !== 0;
}

const checkOddNumber = numberss.filter(isOdd)
console.log(checkOddNumber)


//###### Reduce Method
//sum of the array element

const numbs = [9, 3, 4, 6, 6]

const sum = numbs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 100)
console.log(sum)
/*
100 is an initial value for accumulator
working of reduce method 
accumulator   currentValue     result
9                3               12
12               4               16
 16              6               22
*/

const userCart = [
    { "productId": 1, "productCategory": "mobile", "price": 2000 },
    { "productId": 2, "productCategory": "laptop", "price": 22000 },
    { "productId": 3, "productCategory": "tv", "price": 6000 }
]

const totalProductAmount = userCart.reduce((totalprice, currentproduct) => {
    return totalprice + currentproduct.price
}, 0)
console.log(totalProductAmount)

/*
totalprice  currentproduct result
0            {}             2000
2000          22000          24000
...
*/