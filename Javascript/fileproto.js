const obj1 = {
    key1: 'value1',
    key2: 'value2'
}

// const obj2 = {
//     key3:'value3',
// }

// we can also create empty object and add key value pairs

const obj3 = {}
obj3.key4 = 'value4'

//we can't called other object items.
//console.log(obj2.key1)// undefined 

// their is other way to create empty object.

const obj2 = Object.create(obj1)//{}--> empty object created
// adding keys value on obj2 empty object

obj2.key3 = 'value3';
console.log(obj2)
console.log(obj2.__proto__);

//__proto__
// offical ecmascript documentation

// __proto__,[[prototype]] both are same.

// js have "prototype" which is different from both
