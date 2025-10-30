// Module import file

// default import
import multiple from "./mathOperationM.js";    
console.log(multiple(9, 10));

// non default import and named import
import {add,substract} from "./mathOperationM.js"
console.log(add(20, 20));
console.log(substract(90,1000));

