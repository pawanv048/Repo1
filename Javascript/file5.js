//computed properties
//ES6 feature which allows the names of object 
//properties in JavaScript object literal notation to be determined dynamically
const key1 = 'object1';
const key2 = 'object 2';

const val1 = "value1";
const val2 = 'value 2';

const obj = {}

obj[key1] = val1;
obj[key2] = val2;

console.log(obj)

//spread operator

const randomArray_1 = ["hello","hi","bye"]
const randomArray_2 = ["a","b","c"]

//const newArray = [...randomArray_1,...randomArray_2]

//console.log(newArray)

//when not use spread operator is take whole array as sinal element
//insert element in array
const newArray = [...randomArray_1,randomArray_2,89,74]
console.log(newArray)

const arrayOFNumbers = [..."123456789"]
console.log(arrayOFNumbers)
//if not using spread operator it treat as a single element

//#spread operator in objects:-

const obj1 = {
    key3: "value3",
    key4: "value4",
};

const obj2 = {
    key4: 'valueunique',
    key5: 'value5',
    key6: 'value6',
};
//obj1 is key access bcz obj2 override
const newObject = { ...obj2, ...obj1, key89: "valuesomething"}
console.log(newObject)

//this will make default key & value pairs
const oldObject = { ..."abc" }
console.log(oldObject)

//#### Oject Destructuring

const movies = {
    name:  'Avatar',
    release: '1997',
    date: '20-02-1997',
    year: '2000',
    collection: '2B'
}

//access objects of movies using dot operator
//const movieName = movies.name
//const movierealease = movies.release

//console.log(movieName, movierealease)

//access objects using object desturcturing.

 const {name, release, ...restprops} = movies;
console.log(release)
//access rest items of movies
console.log(restprops)

//##### OBJECT INSIDE ARRAY
//use in real world application most.

const users = [
    {
        "userid": 1,
        "name": "pawan",
        "gender": 'male'
    },
    {
        "userid": 2,
        "name": "shika",
        "gender": 'female'
    },
    {
        "userid": 3,
        "name": 'swati',
        "gender": 'female'
    }
]

//user of "for of" loop

for (let user of users){
    console.log(user)
    console.log(user.name)
    console.log(user.gender)
}

//nested object destructuring
const employee = [
    {
        "userid": 1,
        "name": "ashwani",
        "gender": 'male' 
    },
    {
        "userid": 2,
        "name": 'swati',
        "gender": 'female'
    }
]

//normal object desturcture

const [employee1, employee2] = employee;
console.log(employee2)

//nested object desturcturing

const [{userid},{gender}] = employee
console.log(userid)