function Person(name) {
    this.name = name;
}

Person.prototype.greet=function  ( ) {
    console.log(`hello from ${this.name}`);
    
}


let vinit = new Person("vinit");
vinit.greet();