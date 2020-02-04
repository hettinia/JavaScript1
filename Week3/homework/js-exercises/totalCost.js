"use strict";

/*this function passes the party items as an object 
  and return the sum of these items prices */
function calculateTotalPrice (myPartyItems) {

    //convert the object values to an array
    let myItemsPrices = Object.values(myPartyItems);
    //declare the variable which will hold the total cost
    let totalPrices=0;

    for (let i=0; i<myItemsPrices.length; i++){
        totalPrices += myItemsPrices[i];
    }

    return totalPrices;
}

//declare a grocery items object
let cartForParty = {
    beers: 0.99,
    chips: 1.75,
    cake: 7.20,
    juice: 2.20,
    nuts: 3.50
}

//call the function and log the result
console.log(`the total price of all your items is: ${calculateTotalPrice(cartForParty)}`);