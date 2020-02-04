"use strict";

/*this function passes the credit card number as a string 
  and check if this number 16 digits or not */
function checkNumLength (myCreditCard ) {
    if (myCreditCard.length !== 16){
        return false;
    }
    return true;
}

/*this function passes the credit card number as a string 
  and check if at least two different digits represented or not */
function isDigitsDifferent (myCreditCard ) {
    
    for (let i=0; i<myCreditCard.length; i++){
        if (myCreditCard[0] !== myCreditCard[i]){
            return true;
        }

    }
    return false;
}

/*this function passes the credit card number as a string 
  and check if the final digit is even or not */
function isFinalEven (myCreditCard) {
    if (myCreditCard[myCreditCard.length-1] % 2 !== 0){
        return false;
    }
    return true;
}

/*this function passes the credit card number as a string 
  and check if the sum of all the digits greater than 16 or not */
function checkDigitsSum (myCreditCard) {
    let digitsSum=0;
    for (let i=0; i<myCreditCard.length; i++){
        digitsSum += Number(myCreditCard[i]);
    }
    if (digitsSum <= 16) {
        return false;
    }
    return true;
}

/*this function passes the credit card number as a string 
  and check if all the digits are number or not */
function isAllDigits (myCreditCard) {
    return /^\d+$/.test(myCreditCard);
}

/*this function passes the credit card number as a string 
  and check if this valid credit card number or not */
function creditCardValidator (myCreditCard) {
    //check if the number is 16 digits or not
    if (!(checkNumLength (myCreditCard))){
        return `Your credit card number ${myCreditCard} is invalid, number must be 16 digits`;
    }
    //check if at least two different digits represented or not
    if (!(isDigitsDifferent (myCreditCard))){
        return `Your credit card number ${myCreditCard} is invalid, only one type of number`;
    }
    //check if the final digit is even number or not
    if (!(isFinalEven (myCreditCard))){
        return `Your credit card number ${myCreditCard} is invalid, odd final number`;
    }
    //check if the sum of digits is greater than 16 or not
    if (!(checkDigitsSum (myCreditCard))){
        return `Your credit card number ${myCreditCard} is invalid, sum less than 16`;
    }
    //check if all digits is number or not
    if (!(isAllDigits (myCreditCard))){
        return `Your credit card number ${myCreditCard} is invalid, invalid characters`;
    }

    //return a valid message if the credit card number is valid
    return `Your credit card number ${myCreditCard} is valid!`;
}

//declare a const credit card number examples
const creditCardNumber1 = "9999777788880000"; //valid number
const creditCardNumber2 = "6666666666661666"; //valid number
const creditCardNumber3 = "a92332119c011112"; //invalid characters
const creditCardNumber4 = "4444444444444444"; //only one type of number
const creditCardNumber5 = "1111111111111110"; //sum less than 16
const creditCardNumber6 = "6666666666666661"; //odd final number

//call Credit card validator function and log the result
console.log(creditCardValidator(creditCardNumber1));