// Immutable and mutable
// In React state can't be changed or should not be change, it is immutable and array or object in js are mutable it changes when we change.

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = arr1
// arr2.pop()
// console.log("arr1",arr1);
// console.log("arr2", arr2);

var arr1 = [1, 2, 3, 4, 5];
var arr2 = arr1;
arr2.pop();
// console.log("arr1",arr1);
// console.log("arr2", arr2);
// output:
// arr1 [ 1, 2, 3, 4 ]
// arr2 [ 1, 2, 3, 4 ]

// this above code shows mutability of array, it shows that arr2 takes reference of arr1 so if do any changes in arr2 it will reflect on arr1.
// In memory context both arr1 and arr1 points on single array so it doesn't matter which one changes. the change will reflect on array.

// Now for making new array from previous we use spread operator[...]

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [...arr1];
arr2.pop();
// console.log("arr1", arr1);
// console.log("arr2", arr2);
arr1 = arr2;
// console.log("arr1", arr1);

// output:
// arr1 [ 1, 2, 3, 4, 5 ]
// arr2 [ 1, 2, 3, 4 ]

// this will work as new array and whatever we change in arr2 it will not effect on arr1.

// Fat Arrow function or arrow function [es6]
// Syntax:- ()=>{}
let val = 5;
const checkgreater = (val) => {
  if (val >= 5) {
    // console.log(val);
  }
};
checkgreater(val);

const multval = (val) => val * 2;
val1 = multval(val);
// console.log(val1);

const checkmult = (val) => {
  if (val <= 5) {
    return val * 3;
  } else {
    return val;
  }
};
const val3 = checkmult(val);
//  console.log(val3);

// if only one value and return should be done then we can slim the arrow function by removing fat() and curly braces{}.
// eg:- const multval = val => val * 2

// Map Function:- Map function works on array and perfroms some operation and gives new array. the new array's length can be equal or less than the original array.

var arr1 = [1, 2, 3, 4, 5];
var arr2 = arr1.map((elem) => elem * 2);
// console.log(arr2);
// output:- [ 2, 4, 6, 8, 10 ]
// In this example the new array size is equal to original equal

// Filter Function:- Filter function works on array and perfroms some operation and gives new array. the new array's length is less than the original array.Filter performs some operation to eliminate some elements from original array which doesn't statisfy the condition and gives new array with only those elements which satisfy the condition.

var arr1 = [1, 2, 3, 4, 5];
var arr2 = arr1.filter((elem) => elem > 3);
console.log(arr2);      
// output:- [ 4, 5 ]
// In this example the new array size is less than original array