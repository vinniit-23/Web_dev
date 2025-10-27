// 1. use while loop for calculating sum of numbers from 1 to 5.
let sum = 0
let i = 0
while(i<5){
    i++
    sum +=i
}
console.log(sum);
console.log("-"*600);

//2. use while loop for counting from 5 to 1 and store it in an array

let arr =[]
let k=5
while (k>0) {
    arr.push(k);
    k--
}
console.log(arr);
console.log("-"*600);

// 3. use do-while loop which prompt user about there favourite tea until user prompts stop and store it in an array.
// let teaCollection =[];
// let tea;
// do {
//     tea=prompt(`Enter your favourite tea (enter "stop")`)
//     if(tea !== "stop"){
//     teaCollection.push(tea)
//     }
// } while (tea !== "stop")
// console.log(teaCollection)

// 4. use do-while loop thats add 1 to 3 and store it in variable name total.
let total = 0;
let num =1
do {
    total =num + total
    num++
} while (num <=3);
console.log(total);
console.log("-"*600);


// 4. use for loop and multiple given array [2,4,6] with 2 and store it new array.
let givenArr = [2,4,6]
let multipleArr = []
for (let i = 0; i < givenArr.length; i++) {
    const element = givenArr[i];
    multipleArr.push(element*2);
}
console.log(multipleArr);
console.log("-"*600);

// 6. use for loop that lists all the cities in the array `["paris", "tokoyo", "london"]` and store each city in a array named `citylist`.

let cities =["paris", "tokoyo", "london"]
let citylist = [];
for (let i = 0; i < cities.length; i++) {
    const element = cities[i];
    citylist.push(element);

}
console.log(citylist);

