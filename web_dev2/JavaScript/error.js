function Drink(name) {
    if(!new.target){
        throw new Error(`function must be called with 'new' keyword`);
        
    }
    this.name = name
}
let tea = Drink("tea")
