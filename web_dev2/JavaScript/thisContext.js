let Person = {
    name: "vinit",
    greet() {
        console.log(`hi, I am ${this.name}`);
        
    },
}

Person.greet();
let functiongreet = Person.greet;
functiongreet()

let func = Person.greet.bind({ name: "vinit" })
func()