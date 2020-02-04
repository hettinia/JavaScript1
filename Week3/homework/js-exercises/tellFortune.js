"use strict";

//this function will passes 4 arrays and return a string has random values from these arrays
function tellFortune(childrenNum, partnerName, location, jobTitle){
    
    let i = Math.floor(Math.random() * Math.floor(jobTitle.length)); //this expression will give random number between 0 and 4
    let j = Math.floor(Math.random() * Math.floor(location.length)); //this expression will give random number between 0 and 4
    let x = Math.floor(Math.random() * Math.floor(partnerName.length)); //this expression will give random number between 0 and 4
    let y = Math.floor(Math.random() * Math.floor(childrenNum.length)); //this expression will give random number between 0 and 4

    return `You will be a ${jobTitle[i]} in ${location[j]}, and married to ${partnerName[x]} with ${childrenNum[y]} kids.`;
}

//declare 4 arrays about kids number, women names, locations and job titles
let numChildren = [3, 5, 1, 4, 2];
let partnerNames = ["Emma", "Olivia", "Sophia", "Amelia", "Mia"];
let locations = ["Amsterdam", "Berlin", "Madrid", "Rome", "London"];
let jobs = ["Web Designer", "Project Manager", "Marketing Coordinator", "Software Engineer", "Network Administrator"];

//call tellFortune function and log the result
console.log(tellFortune(numChildren, partnerNames, locations, jobs));