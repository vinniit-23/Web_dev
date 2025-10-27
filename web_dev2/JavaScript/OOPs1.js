class Vehicle {
     constructor(company,model){
      this.company = company
      this.model = model
     }
     details(){
        return `${this.model} car model is from ${this.company} company`
     }
}

class Car extends Vehicle{
      about(){
        return `this method is relies in Car class which inherits the process of Vehicle class. ${this.model} car model is from ${this.company} company `
      }
}

let car = new Car("Tata", "Safari")
console.log(car.details());
console.log(car.about());
