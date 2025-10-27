let computer = { cpu:12}
let lenovo = {
    screen : "HD",
    __proto__ : computer,
};
let tomHardware = {};
// console.log(`computer`, computer.__proto__);
// console.log(`lenovo`, lenovo.__proto__);
// console.log(lenovo);
// console.log(lenovo.cpu);


let genericCar = {tyres:4}

let tesla = {
    driver : "Ai"
};
Object.setPrototypeOf(tesla,genericCar)
console.log(tesla.tyres);
console.log(`has its own property`, tesla.hasOwnProperty('genericCar'));

console.log(`tesla`, Object.getPrototypeOf(tesla));

// let genericCar = {tyres:4}

// let tesla = {
//     driver : "Ai"
// };
// Object.setPrototypeOf(tesla,genericCar)
// console.log(tesla.tyres);
// console.log(`has its own property`, tesla.hasOwnProperty('genericCar'));
// VM580:7 4
// VM580:8 has its own property false

Array.prototype.custom = function  ( ) {
    return `this is custom array method ${this}` 
}
let arr = [1,2,3,4]
console.log(arr.custom());

// Prototypal chain
function Animal(type) {
    this.type=type
}

Animal.prototype.speak= function  ( ) {
    return `${this.type} makes sound`
}
let dog = new Animal("Dog")
console.log(dog.speak());