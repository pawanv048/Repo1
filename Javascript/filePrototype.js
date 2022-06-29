// prototype

//only function provide prototype property
// Here, prototype is nothing but only object
function hello(){
    console.log('hello world')
}

if(hello.prototype){
    console.log('prototype is present')
}else{
    console.log('prototype is not present')
}

// creating property

hello.prototype.abc = 'abc';
//adding property in prototype
hello.prototype.xyz = 'xyz';
console.log(hello.prototype)

hello.prototype.sing = function(){
    return 'sing a song! happy birthday to you'
}
console.log(hello.prototype.sing())

///prototype is a property of a Function object. It is the prototype of objects constructed by that function
//__proto__ is an internal property of an object, pointing to its prototype
// prototype is an object whereas __proto__ is and reference.

// const userMethods = {

//     about: function(){
//         return `${this.firstName} is ${this.age} year old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }

// }

function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}

// By prototype

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} year old`
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}

console.log()

const user4 = createUser('harshit','sharma',23,'harshit124@gmail.com', '12 no. chock, Near Bank of India');
const user6 = createUser('Rohit','sharma',25,'harshit124@gmail.com', '12 no. chock, Near Bank of India');
const user5 = createUser('pawan','sharma',25,'harshit124@gmail.com', '12 no. chock, Near Bank of India');

console.log(user4.about())
console.log(user4.is18())