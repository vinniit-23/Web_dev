function Car(name, model){
    this.name = name;
    this.model = model;
}
let car = new Car("Toyota","Camry")
let newCar = new Car("Tata","Safari")
console.log(car);
console.log(newCar);
console.log("-"*600);

function Tea(types) {
    this.types =types
    this.describe = function ( ) {
        return `this is a cup of ${this.types}`
    }
}
let chai = new Tea ("chai");
console.log(chai);
console.log(chai.describe());
console.log("-"*600);

function Animal(species) {
    this.species=species;
}
Animal.prototype.sound = function ( ) {
    return ` ${this.species} makes sound`
}
let dog = new Animal("Dog")
console.log(dog.sound());

console.log(Animal.prototype);
console.log(Object.getPrototypeOf(dog) === Animal.prototype);  // true
console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype);




/*prototype oriented programming:-


prototype based programming:-{ Prototype based programming is an object oriented style where objects inherit properties and method directly from other Objects, called prototypes, instead of using classes. This "classless" approach allows developers to create an object and then simply clone and extend it creating new object without first defining a blueprint(classes)  
}

Analogy:- A prototype is like an original working document you make a new copy of, which maintains a live link to the original. If you update the original (the prototype), the copies (the new objects) will reflect the change when they look up the shared features.

Javascript is an object oriented programming language but it is distinct as compare with other programming language like java or c++. Javascripts relies on prototype based while java and c++ relies on class based, both are object oriented but creating object are different manner, One is cloning the object while other is creating object with help of class(blueprint) 

Prototype features:
prototype helps to add new custom properties 
it javascript behaviour which leads to create new objects of Objects and linking to the Object
Or adding new properties of a object
prototype also checks properties at heirarcially untill its get null

when you create new object it gains properties and method of its prototype(Old Object, or function)
new keywords help to create new objects and using custom prototypes.
this keywords tells compiler which is coming like this jiska in hindi

prototype oriented programming uses existing object to create new object
it have behave of relation
prototypes are used as template like class in oop but in pop objects are created by cloning or inheriting old object which serves as prototype for new object.

simply old objects are prototypes for new objects.

at last everything is object in javascript so everthing have one common prototype which is Object
*/

