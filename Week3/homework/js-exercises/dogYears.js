"use strict";

//this function passes dpg age as a number and return its age in dog years as a number
function calculateDogAge(dogAge) {
    
    return `Your doggie is ${dogAge * 7} years old in dog years!`;
}


//call the function three times and log the result
console.log(calculateDogAge(3));
console.log(calculateDogAge(4));
console.log(calculateDogAge(7));