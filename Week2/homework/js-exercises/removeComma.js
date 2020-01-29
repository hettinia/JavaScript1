"use strict";

//Declare string with commas
let myString = "hello,this,is,a,difficult,to,read,sentence";

//log th string and its length befor replace commas
console.log(myString);
console.log(myString.length);

//Replace commas with spaces
let newString = myString.replace(/,/g, " ");

//log the new string after replacing commas and test the string length again
console.log(newString);
console.log(newString.length);

