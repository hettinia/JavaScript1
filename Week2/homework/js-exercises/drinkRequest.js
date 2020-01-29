"use strict";

//Declare drinkTray as empty array and drinkTypes as const array
let drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

//this function passed array and vlaue and return count of this value in this array
function countItem (testedArray, item){
    let itemCount=0;
    for (let i=0; i<testedArray.length; i++){
        if (testedArray[i] === item) {
            itemCount++;
        }
    }
    return itemCount;
}

let j=0; //this index used for drinkTypes array
for (let i=0; i<5; i++){
    drinkTray.push(drinkTypes[j]);
    //check how many this drink type repeated in drinkTray
    if (countItem(drinkTray, drinkTypes[j]) === 2){
        j++; //add one to this index to move to the next item
    }
}

console.log("Hey guys, I brought a " + drinkTray + "!");