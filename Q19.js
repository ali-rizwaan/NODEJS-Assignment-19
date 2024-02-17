"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.
let guestArr = ["Rahat Ansari", "Faizan Ansari", "Bilal Ansari"];
let canNotattend = "Wajahat Ansari";
let newGuest = "Irshad Ansari";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Haseeb Ansari");
let middleGuest = "Talha Ansari";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Hamza Ansari");
// console.log(guestArr);
console.log(guestArr.length + " " + "please" + " " + "are invited to dinner");
