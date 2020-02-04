"use strict";

//this function will passes name as a string and return compliment as string 
function giveCompliment (myName){

    let compliments = ["enough","great", "awesome", "strong", "beautiful", "really courageous", "making a difference", "really courageous", "a great listener", "wonderful"];
    let i = Math.floor(Math.random() * Math.floor(compliments.length)); //this expression will give random number between 0 and 9
    return `You are ${compliments[i]}, ${myName}!`;
} 

//call the function three times and log the result
console.log(giveCompliment ("Abed"));
console.log(giveCompliment ("Abed"));
console.log(giveCompliment ("Abed"));