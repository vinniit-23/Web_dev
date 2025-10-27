// *************************** Encapsulation ****************************
// Encapsulation means:- Data hiding 
class BankAccount {
    #balance = 0;
    deposite(Amount) {
        this.#balance+=Amount
        return this.#balance
    }

    setbalance(balance){
        this.#balance=balance
        return this.#balance
    }

    getbalance(){
        return`$${this.#balance}`
    }
}

let Acc1 = new BankAccount();
Acc1.setbalance(400);
Acc1.deposite(5000);
// console.log(`your account balance is ${Acc1.getbalance()}`);


// *************************** Abstraction ******************************
// Abstraction:- Abstraction means abstracting the data and using it.

class CoffeeMachine {
    start() {
        // complex logic writted
        return `coffee machine is started`
    }

        brew() {
        // complex logic writted
        return `your coffee is brewing`
    }

    coffee(){
        let start = this.start()
        let brew = this.brew()
        return `the coffee machine followed step like start and brew. and there outputs are ${start} ${brew}`
    }
}
let coffee = new CoffeeMachine()
// console.log(coffee.coffee());


// *************************** Polymorphism *****************************
// Polymorphism:- multiple forms(one function can have different functionalities as per there location and there method signatures. it has two types run time polymorphism and compile time polymorphism.)

class Bird {
    fly( ) {
       return `Birds can fly` 
    }
}

class Penguin extends Bird{
   fly(){
    return ` penguins can't fly`
   }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());

// *************************** static *****************************
// static method only can call by class itself it can't be call by objects

class  Calculator {
    static add(a,b) {
        return a+b;
    }
}
// console.log(Calculator.add(2,3));

class Employee {
    #_salary;
    constructor(name, salary) {
        this.name = name
    }
    set salary(salary){
        if (salary < 0) {
            return `salary can't be negative`
        }else{
             return this.#_salary=salary

        }
    }
    get salary(){
        return `your salary is $${this.#_salary}`
    }
}

let emp = new Employee("bob")
emp.salary=199999
console.log(emp.name,emp.salary );
