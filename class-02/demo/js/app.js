'use strict';

// comment for single line

/*
for multiple lines of comments


Data Types:

- Strings:
any data inside a '' or " "

- Numbers
integer 3, float 4.6

- boolean
True False
*/

let theName = 'bara\'ah' + 25 + 26;
console.log(theName);

// let theName = 'dina';

let theNumber = 23 + 10;
console.log(theNumber);

/*
if(condition is true){
do this code
} else{
    do this code if the condition is false
}

== value
=== value and datatype
*/



// let age = Number(prompt('How Old Are You'));
// // string to number
// // age = parseInt(age);
// // age = Number(age);
// // alert(age);

// if (age === 21) {
//     alert('you are 21');
// } else if (age >= 18) {
//     alert('Hello you are more than 18');
// } else {
//     alert('please go away you are under the legal age ')
// }

//Switch


/*
switch(variable){
    case 'value1':
        do this code;
        break;
    case 'value2':
        do this code;
        break;

    default:
        do this code if nothing matches the cases above;
        break;
}
*/

// let mood = confirm('Are you good today');
// console.log(mood);

// switch (mood) {
//     case true:
//         document.write('Have a very Goooood Daaaaay');
//         break;
//     case false:
//         document.write('I hope you will get Better soon');
//         break;

// }


let fruit = prompt('what kind of fruits do you want');

switch (fruit.toUpperCase()) {
    case 'BANANA':
        alert('hello banana')
        console.log('Banana is 20 JD for 1 Kg');
        break;
    case 'MELON':
    case 'APPLE':
        console.log('apples and melons are 90 JD each');
        break;

    default:
        console.log('we don\'t have that Sorry');
}

/*
and
all of them should be true
true && true ==> true
true && false ==> false
false && false ==> false
false && true ==> false


or

true || true ==> true
true || false ==> true
false || true ==> true
false || false ==> false
*/