"use strict";

//Declare an array holds three books detials
let myBooks = [
    {
        title: "Android Programming Tutorials",
        author: "Mark L. Murphy",
        alreadyRead: true
    },
    {
        title: "Fundamentals of Python Programming",
        author: "Richard L. Halterman",
        alreadyRead: true
    },
    {
        title: "Ruby Programming",
        author: "Wikipedia Contributors",
        alreadyRead: false
    }
]; 

//Log the books detials
for (let i=0; i<myBooks.length; i++){
    console.log(myBooks[i].title + " , " + myBooks[i].author);
    if (myBooks[i].alreadyRead === true){
        console.log("You already read '" + myBooks[i].title + "'");
    } else {
        console.log("You still need to read '" + myBooks[i].title + "'");
    }
}