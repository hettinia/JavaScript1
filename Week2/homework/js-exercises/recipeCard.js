"use strict";

//Declare an object about cake recipe
let myMeal = {
    title: "Basic Vanilla Cake",
    servings: 12,
    ingredients: ["1 stick unsalted butter", "2 3/4 cups plain flour", "1 teaspoon fine salt", "2 cups granulated sugar", "1/2 cup vegetable oil", "5 large eggs", "1 cup milk"]

}

//Log my meal recipe
const myMealArray = Object.entries(myMeal); //this function will convert the object to an array of arrays
//myMealArray is now [["title","Basic Vanilla Cake"],["servings", "12"],["ingredients", ["1 stick unsalted butter", "2 3/4 cups plain flour", "1 teaspoon fine salt", "2 cups granulated sugar", "1/2 cup vegetable oil", "5 large eggs", "1 cup milk"]]]

//this loop will through myMealArray
for (let i=0; i<myMealArray.length; i++){ 
    //myMealArray items are also arryas so we need to use double indexes to reach values
    switch (myMealArray[i][0]) { 
        case "title" :
            console.log("Meal name: " + myMealArray[i][1]);
            break;
        
        case "servings" :
            console.log("Serves: " + myMealArray[i][1]);
            break;
        
        case "ingredients" :
            console.log("Ingredients:");
            for (let j=0; j<myMealArray[i][1].length; j++){
                //the second item in the myMealArray third item is also an array so we need to use tripple indexes to reach values :)
                console.log(myMealArray[i][1][j]); 
            }
            break;
        
    }
}