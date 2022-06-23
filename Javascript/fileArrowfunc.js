// arrow functions
// arrow functions doesn't have their  own this 
// arrow function takes this from its surroundings.

const user1 = {
    firstName : 'Pintu',
    age: 22,
    about: () => {
        console.log(this.firstName, this.age)
    }
}
//ex:
user1.about(user1)
// output: undefined undefined

// we can directly defined function inside object

// const user4 = {
//     lastName : 'Ashutosh',
//     age: 22,
//     about: function(){
//         console.log(this.firstName, this.age)
//     }
// }
// //like
// const user3 = {
//     lastName : 'Ashutosh',
//     age: 22,
//     about(){
//         console.log(this.firstName, this.age)
//     }
// }








/************** IMPORTANT PROPERTIES WITH OBJECTS ******************/


// Normaly defining of user object
// create different object with same item of object like user1, user2 etc.

// const user = {
//     firstName: 'harshit',
//     lastName: 'sharma',
//     email: 'harshit123@gmail.com',
//     age: 22,
//     address: '12 no. chock, Near Bank of India, Colony, Pincode, state',
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age >=18;
//     }
// }

//like this but this not work for 100 or more objects of users
// so, we have to create function.
// const user2 = {
//     firstName: 'harshit',
//     lastName: 'sharma',
//     email: 'harshit123@gmail.com',
//     age: 22,
//     address: '12 no. chock, Near Bank of India, Colony, Pincode, state',
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age >=18;
//     }
// }
//calling 

// const aboutUser = user.about();
// console.log(aboutUser)

//Solution:
// to create function.
// By creating this we no longer need of user object

// function createUser(firstName, lastName, age, email, address) {
//     // creating empty object
//     // in same mannar we create component in react
//     // inside object function call as method
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} year old`
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// memory consption for each user


/// resolve by creating sepearte function

const userMethods = {

    about: function(){
        return `${this.firstName} is ${this.age} year old`;
    },
    is18: function(){
        return this.age >= 18;
    }

}



// function createUser(firstName, lastName, age, email, address) {
//     // creating empty object
//     // in same mannar we create component in react
//     // inside object function call as method
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     //calling methods
//     // this give reference of method and provide address of method in memory
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

//Now create reference using proto
function createUser(firstName, lastName, age, email, address) {
    // creating empty object
    // in same mannar we create component in react
    // inside object function call as method
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    //calling methods
    // this give reference of method and provide address of method in memory
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    return user;
}

const user4 = createUser('harshit','sharma',23,'harshit124@gmail.com', '12 no. chock, Near Bank of India');
const user6 = createUser('Rohit','sharma',25,'harshit124@gmail.com', '12 no. chock, Near Bank of India');
const user5 = createUser('pawan','sharma',25,'harshit124@gmail.com', '12 no. chock, Near Bank of India');

console.log(user4)
console.log(user4.about())
console.log(user4.is18())