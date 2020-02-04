"use strict";

//this function will passes grocery Item as a string and return a string about whats you bought
function addToShoppingCart(groceryItem){

    //if the array has more than 3 items this will delete the first item
    if (groceryList.length >= 3) {
        groceryList.shift();
    }

    //add the passed item to the array
    groceryList.push(groceryItem);

    return `You bought ${groceryList}!`;
}

//declare the grocery List array
let groceryList = ["bananas","milk"];

//call the function three times and log the result
console.log(addToShoppingCart("eggs"));
console.log(addToShoppingCart("breads"));
console.log(addToShoppingCart("juice"));