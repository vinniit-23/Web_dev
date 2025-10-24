// checking if a number is greator than another number:

let num1 =3
let num2 =6

if(num1>num2){
    console.log("number 1 is greator");  
}else{
        console.log("number 2 is greator");

}

console.log("-"*600);

// check the string is equal or not

let str1 = "abc"
let str2 = "ABC"

if(str1 === str2){
    console.log("Both strings are same");
    
}else{
        console.log("Both strings are not equal");

}

console.log("-"*600);


// check variable is number or not
let var1 = 22
if(typeof var1 === 'number'){
    console.log("variable type is number");
    
}else{
    console.log("variable type is not a number");
    
}

console.log("-"*600);

// check the boolean
let bool = true
if(bool){
    console.log("Boolean value is true");
    
}else{
    console.log("its false");
    
}

console.log("-"*600);

// check wether array is empty or not

let arr = []
let lenOFarr = arr.length
if(lenOFarr === 0){
    console.log("array is empty");
    
}else{
    console.log("arry is not empty");
    
}
