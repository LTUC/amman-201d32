'use strict';



// adding items to local storage

localStorage.setItem('Email','basharalasmar@gmail.com');

localStorage.setItem('Passcode', 12345);



// it takes in a parameter and this parameter is they key LS.getItem(key)
console.log(localStorage.getItem('Email'));
console.log(localStorage.getItem('Passcode'));
console.log(localStorage.getItem('name'));



// remove an item (one) from the local storage ?
// localStorage.removeItem(key)

localStorage.removeItem('name');
// localStorage.removeItem('Passcode');



// remove the whole local storage 
// localStorage.clear();


