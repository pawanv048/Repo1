// primitive vs reference data types

//primitive: primitive data type are default data type
let n1 = 5;
let n2 = n1;

console.log("value of n1 is: ", n1) //5
console.log("value of n2", n2)  //5
n1++
//after increment the value
console.log("value of n1 is: ", n1)//6
console.log("value of n2 is: ",n2)//5

//reference type
//arrays

let fruits = ["apple","mango"]
let fruits1 = fruits

console.log(fruits)
console.log(fruits1)
fruits.push("orange")
//after pushing the in array
console.log(fruits)
console.log(fruits1)


//difference between primitive vs reference data type

//primitivie : byte, short, int, long...
//primitive store primitive values
//value is copied
//store in stack

//reference type : class and arrays
//reference variable store address
//address copied
//store in heap

//* how to clone array

let colors = ["black","blue"]
//let colors1 = colors.slice(0); //create new array //fast
let colors1 = colors.slice(0).concat(["lightgrey", "darkgrey"]) // adding element in new array
//let colors1 = [].concat(colors) //same
//let colors1 = [].concat(colors,["item3","item4"]) //adding element on new array
//let colors1 = [...colors] // with help of spread operator(...), we can create new array.
//let colors1 = [...colors, "lightgrey", "darkgrey"] //adding elements in spread operator
//let fruit = ["apple","mango"]
//let colors1 =  [...colors, ...fruit] //adding two array with help of spread operator
colors.push("orange")
console.log(colors===colors1) //false both are seperate array
console.log(colors)
console.log(colors1)


//slice will offer new arrays
//two method to create new array with slice and concate, spread method.


//*** */ for loop in array

let period = ["math","science","english"]

let period1 = []

for(let i=0; i < period.length; i++){
    period1.push(period[i].toUpperCase());
}

console.log(period1)

// use const for creating array

const subject = ["math","science","computer"]
subject.push("history")
console.log(subject)
// const don't change the value but in case of array it store address of array
// so const don't change the address only print the array locate at that address.

//**** while loop in array */

const office = ["office1", "office2", "office3"]
const office1 = []
let i = 0
while(i<office.length) {
    office1.push(office[i].toUpperCase())
    i++;
}
console.log(office1)

//**** for of loop in array */
//no need to initalize array with for of loop

const bugs = ["error1", "error2", "error3"]
const bug = []

for(let error of bugs){
    bug.push(error.toUpperCase());
}
console.log(bug)

//**** for in loop */
//return array index

const bag = ["bag1", "bag2", "bag3"]

for(let index in bag){
    //console.log(index)
    console.log(bag[index])
}
//mostly for of and normal for loop is used in many cases.

//ES-6 **** array destructuring

const myArr = ["value1","value2","value3","value3"]
//simple store array in variable
//let newArr = myArr[0];
//let newArr1 = myArr[1];
// with array desturcturing
//let [myvar1,myvar2] = myArr // default store value of array in variable
let [myvar1,,myvar2] = myArr
//let [myvar1,myvar2, ...myNewVar] = myArr //rest value are store in myNewVar
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2)
//console.log(myNewVar)


//*****real world data */

//object 
//object is reference type
// array are good but not sufficienct
// for real world data
// object store key value pairs

// how to create objects

const person = { name: 'pawan', age: 22}
console.log(person)
console.log(typeof person)
const persondetail = { 
    name: 'pawan',
    age: 22,
    fathername:'fathername',
    mothername: 'mothername',
    hobbies: ["chess","movie","music","sleeping"]
}
console.log(persondetail)

// how to access data from object
// by dot operator/notation 

console.log(persondetail.hobbies[0])
//by default key are in string so we can access by using
console.log(persondetail["fathername"])

// how to add key value pair to objects

persondetail.gender = "male"
console.log(persondetail)

let room = {
    roomNumber: "1",
    address: "34 street",
    "favoriteRoom": ['room 3','room 4', 'room 5']
}

//access through object.keys1
//access value of keys2
//access key with values3
//access key values without template strings
for(let key in room){
    //console.log(key)
    //console.log(room[key])
    //console.log(`${key}: ${room[key]}`)
    //console.log(key,":",room[key])
}

//object.key gives array

console.log(Object.keys(room))