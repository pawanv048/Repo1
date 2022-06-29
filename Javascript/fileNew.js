//new keyword
//The new operator lets developers create an instance of a user-defined 
//object type or of one of the built-in object types that has a constructor function.
// new create connection. it works as protoptype
// const user = Object.create(createUser.prototype working to establish connect without written lining of this.
//constructor

function createUser(firstName, lastName, age, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} year old`
}
createUser.prototype.is18 = function () {
    return this.age >= 18;
}
createUser.prototype.sing = function () {
    return 'happy birthday';
}

const user1 = new createUser('harshit', 'sharma', 23, 'harshit124@gmail.com', '12 no. chock, Near Bank of India');
const user2 = new createUser('Rohit', 'sharma', 25, 'harshit124@gmail.com', '12 no. chock, Near Bank of India');
const user3 = new createUser('pawan', 'sharma', 25, 'harshit124@gmail.com', '12 no. chock, Near Bank of India');

console.log(user1.about())
console.log(user1.is18())


// it also takes the key of prototype
for (let key in user1) {
    // console.log(key)
    //Determines whether an object has a property with the specified name.
    if (user1.hasOwnProperty(key)) {
        console.log(key)
    }
}
// if we want only createuser keys.

let number = [1, 2, 3]
console.log(Object.getPrototypeOf(number))
console.log(Array.prototype);
console.log(number);


///Class : - properties and methods are defind single path.
// class works same as function and prototype.

class createUser {
    constructor(firstName, lastName, age, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} year old`
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return 'happy birthday';
    }
}
// without new keyword we can't able to access createuser

const user4 = new createUser('harshit', 'sharma', 23, 'harshit124@gmail.com', '12 no. chock, Near Bank of India');
const user5 = new createUser('Rohit', 'sharma', 25, 'harshit124@gmail.com', '12 no. chock, Near Bank of India');
const user6 = new createUser('pawan', 'sharma', 25, 'harshit124@gmail.com', '12 no. chock, Near Bank of India');

// console.log(user1.about())
// console.log(user1.is18())
console.log(getPrototypeOf(user4))