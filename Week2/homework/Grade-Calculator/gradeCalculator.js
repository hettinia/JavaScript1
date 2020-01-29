"use strict";

//this function calculates grades, based on the American grading system!
//this function passes the exam result parameter as a number and return the grade as a string
function gradeCalculator(myGrade) {

        //if the value between 90 and 100
        if ((myGrade >= 90) && (myGrade <= 100)){
            //used backticks as a template string, so you can insert variables
            return `You got a A (${myGrade}%)!`; 
        }
        //if the value between 80 and 89
        else if ((myGrade >= 80) && (myGrade <= 89)){
          //used backticks as a template string, so you can insert variables
          return `You got a B (${myGrade}%)!`;
        }
        //if the value between 70 and 79
        else if ((myGrade >= 70) && (myGrade <= 79)){
          //used backticks as a template string, so you can insert variables
          return `You got a C (${myGrade}%)!`;
        }
        //if the value between 60 and 69  
        else if ((myGrade >= 60) && (myGrade <= 69)){
          //used backticks as a template string, so you can insert variables
          return `You got a D (${myGrade}%)!`;
        }
        //if the value between 50 and 59 
        else if ((myGrade >= 50) && (myGrade <= 59)){
          //used backticks as a template string, so you can insert variables
          return `You got a E (${myGrade}%)!`;
        }
        //if the value between 0 and 49  
        else if ((myGrade >= 0) && (myGrade <= 49)){
          //used backticks as a template string, so you can insert variables
          return `You got a F (${myGrade}%)!`;
        }
        //if the value out of the (0 - 100) range 
        else {
          return `please enter a valid value!!`;
        }        
}

//this log will test the function gradeCalculator
//please enter a value between 0 and 100
console.log(gradeCalculator(65));