// methods
// function inside object
// object always create with inside curly braces
// this keyword can access whole object key and values as well, 
// this know after run time.
 function personInfo() {
    console.log(`person name is ${this.firstName} and person age is ${this.age}`)
    console.log(this)
}


const person1 = {
    firstName : 'pawan',
    age: 22,
    about: personInfo
}

const person2 = {
    firstName : 'swetabh',
    age: 24,
    about: personInfo
}

const person3 = {
    firstName : 'Ramranjan',
    age: 25,
    about: personInfo
}

//calling of function inside object.

person2.about()
person3.about()


//this will provide with js all methods.
//console.log(this)
//console.log(window)
// function will create window object 
function wininfo(){
    console.log(this)
}

window.wininfo()


// use of Call method

 function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician)
}

const user1 = {
    firstName: 'Subodh',
    age: 23,
    
}

const user2 = {
    firstName: 'Rohit',
    age: 32
}
//Calls a method of an object, substituting another object for the current object.
//user1.about.call(user2,'movie','Arjit singh')
about.call(user1,'movie','Arjit singh')

//#### apply Method
//Calls the function, substituting the specified object for the this value of the function, and 
//the specified array for the arguments of the function

about.apply(user2,['playing','lata mk']);

//######## bind method
/*
An object to which the this keyword can refer inside the new function.

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has 
the specified initial parameters.
*/

const func = about.bind(user2, 'travel', 'raj kapoor')
func()