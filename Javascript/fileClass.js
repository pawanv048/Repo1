// Class 
// without new keyword we can't invoked/call method of class.

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

const animal = new Animal('jerry', 1)
console.log(animal)
// calling function
console.log(animal.eat())
console.log(animal.isSuperCute())

// create dog class

// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }

// }

// we can inherit properties of Animal in Dog class, we don't need to write all code. with help of " extends"

// same method in subclass
class Dog extends Animal {
    constructor(name, age, speed){
        //super denoted to parent class 
        super(name, age)
        this.speed = speed;
    }
    eat(){
        return `Modified eat: ${this.name} is eating `
    }

    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }
}

// creating object 
// Object/ Instance are same.
const dog = new Dog('tommy', 20, 45);
console.log(dog)
console.log(dog.isCute())
console.log(dog.run())

// first js check derived class then parent class method
console.log(dog.eat())




//###### getter and setters

class person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //get
    get fullName(){
        return `${this.firstName} ${this.lastName} age is ${this.age}`
    }

    // setName (firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    //set method
    
    set fullName(fullName){
        //Split a string into substrings using the specified separator and return them as an array.
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName;
        this.lastName = lastName;
 
    }

}
//creating object
const person1 = new person('pawan','verma', 22)
console.log(person1.fullName)

console.log(person1.firstName)
console.log(person1.lastName)

//person1.setName('mohit','rohit')

console.log(person1.firstName)
console.log(person1.lastName)

person1.fullName = 'kiran rahul';
console.log(person1.fullName)
console.log(person1)

// static method and properties

class student {
    // static method
    static studentName(){
        return 'this is ravi'
    }
    // static property
    static desc = "static properties";
}
// static method can be called directly through class name. ex below
//use // initilizing app
const studentInfo = student.studentName()
console.log(studentInfo)
// static properties can also declared using class.

const ans = student.desc;
console.log(ans)