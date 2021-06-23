'use strict';

// code review for the 7th question in lab03

// nested for loop

// let movies = ['Inception', 'The mechanic', 'Shutter-island', 'The GodFather', 'Se7en', 'SAW', 'SAW', 'Avengers', 'Sherlock Holmes', 'A Quite Place', 'Dark-Night'];

// // let correct = false;
// // first for loop for thr number of guessing time 
// for (let i = 0; i < 6; i++) {
//     // 6 time looping [# of attempts]
//     // console.log(i);
//     let question7 = prompt('whats my Fav Movie', 'you have 6 tries');
//     // the inner loop for the correct answer
//     for (let j = 0; j < movies.length; j++) {
//         // console.log('before', j);
//         if (question7 == movies[j]) {

//             alert('Correct Answer, I like this movie');
//             console.log('after', movies[j]);
//             // score++;
//             // correct = true;
//             i = 7;
//             break;
//         }

//     }
//     // if (correct) {
//     //     break;
//     // }
// }


// let array = ['1', 2, '33', 90];
// console.log('the array', array);
// // array.pop();
// // console.log(array);
// // array.push('hello');
// // console.log(array);
// // array.shift(); // remove the first item in the array
// // console.log(array);

// // array.unshift('welcome'); // adding to the first of the array

// deleting specific index from the array
// let mainArray = ['element1', 'element2', 'element3'];
// console.log('main', mainArray);
// let dummyArray = [];
// for (let i = 0; i < mainArray.length; i++) {
//     if (mainArray[i] == mainArray[1]) {
//         continue;
//     } else {
//         dummyArray.push(mainArray[i])
//     }
// }
// // mainArray = dummyArray;
// console.log('dummay', dummyArray);

// =================================
// =================================
// =================================

// FUNCTIONS
// Function Declaration

// function welcomeMsg() {
//     alert('Hello All to 201d32 Course');
// }
// // do not forget to call the function
// welcomeMsg();
// welcomeMsg();
// welcomeMsg();
// welcomeMsg();
// welcomeMsg();
// welcomeMsg();

// let userInput = prompt('Hello, Could you please tell me your Name');

// console.log(userInput);

// function getName(userName) {
//     let output = 'Hello ' + userName;
//     // don't forget to return
//     return output;
// }

// console.log(getName('Mustafa'));
// // console.log(getName(userInput));
// console.log(getName('Ahmad'));
// console.log(getName('Ali'));
// console.log(getName('Sondos'));
// console.log(getName('Salsabeel'));
// console.log(getName('Rula'));
// console.log(getName('Suhaib'));
// console.log(getName('Mohammad'));

// console.log(square(100)); // I can call the function before declare it in function declaration

// function square(length) {
//     let area = length ** 2;
//     let permitter = length * 4;
//     return [area, permitter];

// }

// console.log(square(5)); // it will log the area and the permitter
// console.log(square(52));
// // I want to log only the area 
// console.log('the output are the area and permitter', square(90));
// console.log(square(90)[0]);




// Function Expression
// I cant call the function before it declared
// console.log(getAge(2005));

// let getAge = function(year) {
//     let theAge = 2021 - year;
//     return theAge;
// }

// console.log(getAge(2001));

// let someFunction = function() {
//     return alert('hello');
// }
// someFunction();

// // Immediately invoked function
// for (let i = 0; i < 6; i++) {
//     (function () {
//         console.log('Good Day');
//     })();
// }

// (function (userName) {
//     console.log('ya 100 welcome ' + userName);
// }
//     ('Anas')
// );


// SCOPES
// Global Scope
// Global variable can be used anywhere in the code 

let FirstName = 'Ahmad';

console.log('Global1', FirstName);

function fullName() {
    // Local Variable
    let FirstName = 'Ibrahim';
    let lastName = 'hamzah';
    alert(lastName + FirstName);
    console.log('function scope', FirstName);
}
fullName();

console.log('Global2', FirstName);