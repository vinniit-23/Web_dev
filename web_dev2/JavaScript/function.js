/*1. Write a function named `makeTea` that takes one paramter, typeOfTea and return a string like `"Making green tea"` when called with "green tea", store the result in a variable named "teaOrder" */
function makeTea (typeOfTea){
    return ` making ${typeOfTea}`
}
let teaOrder = makeTea("green tea")
console.log(teaOrder);
console.log("-"*600);

/*2. create a function named `orderTea` that takes one parater, `teaType`. Inside this function create another function named  `confirmOrder` that returns a meesage like ` order confirmed for chai`, call confirmOrder from within orderTea and return the result   */

function orderTea (teatype){
 function confirmOrder() {
        return `order confirmed for ${teatype}`
        
    }
    return confirmOrder()

}
console.log(orderTea('chai'));
console.log("-"*600);

/*3. write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the price and quantity . store in varivable named 
'totalCost' */
// let calculateTotalCost = (price, quantity)=>{ return price*quantity}
let calculateTotalCost = (price, quantity)=> price*quantity
let totalCost = calculateTotalCost(78,90)
console.log(totalCost);
console.log("-"*600);


/**4. write a function named `processTeaOrder` that takes another function, ` makeTea`, as a parameter and calls it with the arguement "earl gray". return the result of calling 'makeTea' */
function makeTea(typeOfTea){
    return `making ${typeOfTea}`;
}
function processTeaOrder(func, teatype) {
  return makeTea(teatype);
    
}
 let func1 = processTeaOrder(makeTea, "chai")
 console.log(func1);
 console.log("-"*600);


 /**5. write a function named `createTeaMaker` that returns another function. the returned function should take one parameter `teatype`, and return a message like `"making green tea"`. store the returned function in a variable names "teamaker" and call it with "green tea".   */
 function createTeaMaker() {
    return function (teatype) {
        return `making ${teatype}`;
    }
 }

 let teamaker = createTeaMaker();
 let result = teamaker("green tea")
 console.log(result);
 


