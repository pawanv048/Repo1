//######find method

const animal = ["Hello","cat","dog","bats"]

// function isLength3(string){
//     string.isLength3 === 3
// }

const ans = animal.find((string)=> string.length===3);

console.log(ans)

//application example

const release = [
    {releaseId: 1, releaseTitle: 'Mano na mano'},
    {releaseId: 2, releaseTitle: 'jano na mano'},
    {releaseId: 3, releaseTitle: 'chaho na mano'},
    {releaseId: 4, releaseTitle: 'deko na mano'},
    {releaseId: 5, releaseTitle: 'lelo na mano'}
]

const myUser = release.find((user)=>{
    return user.releaseId===3
})
console.log(myUser)

//####### every method

const num1 = [2,4,8,7,10]

function isEven(number) {
    return number%2===0;
}
//every method check every arrays if the any condition fails then it return false value.
//callback function ---> true / false(boolean)
//every method ---> true / false(boolean)
const check = num1.every(isEven)
console.log("value check for odds using every => ",check)

//application example for every method

const newrelease = [
    {releaseId: 1, releaseTitle: 'Mano na mano',price: 2000},
    {releaseId: 2, releaseTitle: 'jano na mano', price: 3000},
    {releaseId: 3, releaseTitle: 'chaho na mano',price: 4000},
    {releaseId: 4, releaseTitle: 'deko na mano',price: 2000},
    {releaseId: 5, releaseTitle: 'lelo na mano',price: 6000}
]

// check wheather newrelease price < 10000 for every items

const releasePrice = newrelease.every((releaseItem)=>releaseItem.price < 10000)
console.log(releasePrice)


//#### some method
//Determines whether the specified callback function returns true for any element of an array.
// just opposite to every method

const num2 = [2,4,8,7,10]

function isEven(number) {
    return number%2===1;
}
const ans1 = num2.some(isEven)
console.log('value check for odds using some => ',ans1)

//application example

const newreleaseItem = [
    {releaseId: 1, releaseTitle: 'Mano na mano',price: 2000},
    {releaseId: 2, releaseTitle: 'jano na mano', price: 3000},
    {releaseId: 3, releaseTitle: 'chaho na mano',price: 4000},
    {releaseId: 4, releaseTitle: 'deko na mano',price: 2000},
    {releaseId: 5, releaseTitle: 'lelo na mano',price: 6000}
]

const releasedata = newreleaseItem.some((releasedata)=>releasedata.price > 5000)
console.log(releasedata)

//##### fill method
//Changes all array elements from start to end index to a static value and returns the modified array
// value, start, end

// const myArray = new Array(10).fill(-1)
// console.log(myArray)

const myArray = [1,2,3,4,5,6,7,8,9]
//want to fill 0, [3,4,5] element in array
myArray.fill(0,2,5)
console.log(myArray)

// splice Method
// argument: start, delete, insert
/*
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.
*/

const itemsArray = ["item1","item2","item3"]
//delete operation
//itemsArray.splice(1,2)
//it also return deleted items
//console.log(itemsArray)

//inserted

itemsArray.splice(1, 0, "inserted item1")
console.log(itemsArray)


//iterables
//where we can perform for of loops
//string, array are iterables but object are not iterables.

//const firstName = 'Pawan'

// for(let char of firstName){
//     console.log(char)
// }

const newItem = ["item1","item2","item3"]

for(let item of newItem) {
    console.log(item)
}

// objects are not iterables.

// const newItem = {
//         key1: 'value1',
//         key2: 'value2',
//         key3: 'value2'
//     }
// for(let item of newItem) {
//     console.log(item)
// }

// array like objects
// we can pass default length,
// we can access from index as well

const secondName = 'Kumar'
console.log(secondName.length)
console.log(secondName[3])


// ###### sets(it is also iterable)
/// store data
/// it also has it's own method.
/// No index based access.
/// order is not guaranteed.
/// unique items only (no duplicate allowed)

const numb = new Set([1,2,3])

console.log(numb)

// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);
