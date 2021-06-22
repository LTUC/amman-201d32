'use strict';

/*
if statement

if(condition){
    do this code ..
}else if(condition){
    do this code ..
}else{
    do the else code
}


switch

switch(variable){
    case 'value1:
        console.log(-----);
        break;
    case 'value2:
        console.log(---------);
        break;
    default:
        do the last code;
}


comparison operators

== value
=== value and datatype
>
<
!= not equal the value
!== not equal the value and datatype
<=
>=
 do not do this at home it is danger => no it will cause an  error


 Logical operators

 AND
 &&

 IF both of them are true it will be true , other than that it will be false

 OR
 ||
 If Both of them are false it will be false other than that it will be true

!true it will be false

TRuthy I can test it using the build in function called
Boolean()
true
1
5/2
'bag'
'true'
' ' not empty
2/0 infinity its is a number


Falsy values

false
0
'' empty string
null
NAN for example 'string'/2


*/

// let userName = prompt('what is your name');
// let anotherName = ''; //falsy value
// if (userName) {
//     alert('hello ' + userName)
// } else if (!anotherName) {
//     alert('please enter name');
// }


/*
LOOPS

1. for
when I know exactly how many time to repeat it
for(initial; condition; update){
    do this code ;
}

[increment]
initialization : let i=0;
condition : i<=10;
update: i++;

[decrement]
initialization : let i=10;
condition : i>=10;
update: i--;


*/

// for (let i = 0; i < 5; i++) {

//     // if (i == 2) {
//     //     break;
//     // }

//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 2000; i >= 10; i--) {
//     console.log(i);
// }


/*

2. While loop
when I don't know how many time to repeat the code ..
Validation

while(condition){
    the code
}
*/

// let userName = prompt('whats your Name');
// console.log(userName);

// while (!userName) {
//     console.log(userName);
//     userName = prompt('please enter your name');
// }

// console.log(typeof(userName)); //it will be string unless I changed it b/c I am using prompt
// while (userName == '') {
//     console.log(userName);
//     userName = prompt('please enter your name');
// }



/*
do-while
shoot first then ask

do{
    do this code
}while(condition);
*/

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i < 1);

// while (i < 1) {
//     console.log(i);
//     i++;
// }


/*
ARRAYS
*/


// let garde1 = 100;

// let grade2 = 66;

// let grades = [100, 66, 30, 23, 258, 265, 23, 25, 40];

// console.log('all', grades);
// console.log('first', grades[0]);
// console.log('3rd index', grades[2]);

// // knowing the length of the array
// console.log('length of the array', grades.length);

// // adding to the end of the array a new value
// grades.push(900);

// console.log('after pushing', grades);
// console.log('length of the array after pushing', grades.length);

// // remove the last value of the array
// grades.pop();
// grades.pop();
// grades.pop();
// console.log('after poping', grades);

// // knowing the index
// console.log(grades.indexOf(23));


// let information = ['Ahmad', 897, 1258, 'tall', ['avengers', 'inception', 'IT', ['horror', 'action', 'drama']]];

// console.log(information);
// // access the inner array

// console.log(information[4][2]);
// console.log(information[4][3][1]);

// DEMO

alert('Welcome to my webpage');

let userName = prompt('what\'s your name');

let score = 0;

while (!userName) {
    userName = prompt('please enter your name');
}

alert('Hello hello ' + userName + ' I am really glad that you are in my webpage');

if (userName !== 'baraah') {
    alert('too bad your name is not baraah')
}

let firstAnswer = prompt('is my fav food pasta', 'answer with yes or no plz');
console.log(firstAnswer);

if (firstAnswer.toLocaleLowerCase() === 'yes' || firstAnswer.toLocaleLowerCase() === 'y') {
    alert('you answered correctly I really love pasta');
    score++;
} else if (firstAnswer.toLocaleLowerCase() === 'no' || firstAnswer.toLocaleLowerCase() === 'n') {
    alert('no thats wrong')
}

let secondAnswer = prompt('Do minions fly');

switch (secondAnswer.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('wrong, they cannot fly');
        break;
    case 'no':
    case 'n':
        alert('Correct they cannot Fly');
        score++;
        break;

}

console.log(secondAnswer);
alert('Great work ' + userName + 'and your score is ' + score);


let favFood = ['Mansaf', 'Maqloba', 'fish', 'zeit w za\'ater'];
for (let i = 0; i < favFood.length; i++) {
    console.log(favFood[i]);
}