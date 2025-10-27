/*1. Use for loop that loops through the array `["green tea", "black tea", "chai","oolong tea"]` and stops the loop when it finds `"chai"`.
store all teas before `"chai"` in a new array named `selectedTeas` */
let teas =["green tea", "black tea", "chai","oolong tea"];
let selectedTeas =[];
for (let i = 0; i < teas.length; i++) {
    const element = teas[i];
    if (element === "chai") {
        break;
    }
    selectedTeas.push(element);
}
console.log(selectedTeas);
console.log("-"*600);

/**2. Use for loop for looping through array `["London", "New York", "paris", "berlin"]` and skips "paris" */
let citylist =["London", "New York", "paris", "berlin"];
let newcitylist = [];
for (let i = 0; i < citylist.length; i++) {
    const element = citylist[i];
    if (element === "paris") {
        continue;
    }
    newcitylist.push(element);   
}
console.log(newcitylist);
console.log("-"*600);

/**3. use a for-of loop to iterate through the array `[1,2,3,4,5]` and stop when the number `4` is found. Store the numbers before `4` in an array named 'smallNumbers' */
let num = [1,2,3,4,5]
let smallNumbers =[]
for (const element of num) {
    if (element === 4) {
        break;
    }
    smallNumbers.push(element);
}
console.log(smallNumbers);
console.log("-"*600);

/**4. Use a for-of looop to iterate through the array `["chai","green tea", "herbal tea","black tea"]` and skip herbal tea
 */
let teatype = ["chai","green tea", "herbal tea","black tea"];
let prefferedTea =[];
for (const element of teatype) {
    if (element === "herbal tea") {
        continue;
    }
    prefferedTea.push(element);
}
console.log(prefferedTea);
console.log("-"*600);

/**5. use a for-in loop to loop through an object containing city populations.
 * stop the loop when the population od "berlin" is found and store all the previous city population in a new object named "cityPopulation"
    let citiesPopulation={
    "london":8900000,
    "New York":8400000,
    "Paris":2200000,
    "berlin":3500000",
  };
 */

    let citiesPopulation={
    "london":8900000,
    "New York":8400000,
    "Paris":2200000,
    "berlin":3500000,
  };
  let cityPopulation = {}
  for (const key in citiesPopulation) {
   if (key === "berlin") {
    break
   }
    cityPopulation[key] =citiesPopulation[key]
    
  }
  console.log(cityPopulation);
  console.log("-"*600);

  /*6.  use a for-in loop to loop through an object containing city populations.
 skip the loop when the population od "berlin" is found and store all the previous city population in a new object named "largeCities"
    let worldPopulation={
    "sydney":8900000,
    "New York":8400000,
    "Paris":2200000,
    "berlin":3500000,
  };
   
   */
    let worldcities={
    "sydney":8900000,
    "New York":8400000,
    "Paris":2200000,
    "berlin":3500000,
  };
  let largeCities = {}
  for (const key in worldcities) {
     if (worldcities[key]<3000000) {
    continue;
     }
  largeCities[key] =worldcities[key]  
    
  }
console.log(largeCities);
  
console.log("-"*600);

/**7. write a for-each loop that iterates through the array `["earl grey","green tea", "chai", "oolong tea"]`.
  stop the loop wen "chai" is found, and store all the previous tea types in an array names "availableteas"
 
 */
let teatypes = ["earl grey","green tea", "chai", "oolong tea"]
let availableteas =[]
teatypes.forEach(element => {
    if (element === 'chai') {
        return 0;
    }
    availableteas.push(element)
});
console.log(availableteas);
console.log("-"*600);

/*8. write a for-each loop that iterates through the array `["Berlin", "Tokyo","sydney","paris"]`
skip sydney and store other cities in new array named "traveledcities"

 */
let givenCities =["Berlin", "Tokyo","sydney","paris"]
let traveledcities = []
givenCities.forEach(element => {
    if (element === "sydney") {
        return
    }
    traveledcities.push(element);
});
console.log(traveledcities);
console.log("-"*600);

/*9. write a for loop that iterates through the array `[2,5,7,9]`.
skip the value 7 and multiple the rest by 2. store the result in a new array named "doublesNumbered"
 */
let number = [2,5,7,9]
let doublesNumbered = []
for (let i = 0; i < number.length; i++) {
    if (number[i] === 7) {
        continue
    }
    doublesNumbered.push(number[i]*2)
}
console.log(doublesNumbered);
console.log("-"*600);

/*10. use a for-of loop to iterate through the array `["chai","green tea", "black tea", "jasmine tea", "herbal tea"]`
and stop when the length of the current tea name is greater than 10. */
let tea = ["chai","green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []
for (const element of tea) {
    if (element.length >10) {
        continue
    }
    shortTeas.push(element)
}
console.log(shortTeas);

