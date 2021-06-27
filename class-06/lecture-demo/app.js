'use strict';
// alert('hello js');


// Object
/*

Human
properties:

name:Salsabeel
age:16

Methods:
eat: function
sleep: function 



Phone
model:
height:
RAM

methods:
calling:
taking pics:
texting:
*/

// object literal
let Ahmad = {
    name: 'Ruba',
    age: 25,
    job: 'Student',
    weight: 70,
    height: 180,

    likes: ['Swimming', 'Running', 'Reading', 'Flying'],

    talk: function() {
        console.log(`Hello my name is ${this.name}`);
        console.log(this);
    },

    JobDescription: {
        title: 'Senior Developer',
        experience: 100000,
        salary: 750,

        hello: function() {
            console.log(this);
        }
    },
    addWeight: function() {
        console.log(this.weight + this.height);
    }
}

// // accessing properties
// // 1. dot notation
// console.log(Ahmad.age);
// console.log(Ahmad.talk());
// console.log(Ahmad.JobDescription.hello());
// console.log(Ahmad.addWeight());

// // 2. bracket notation
// console.log(Ahmad['job']);

// // type of
// console.log(typeof Ahmad);

// // accessing the inner object
// console.log(Ahmad.JobDescription.salary);

// looping in the array that is inside the object


// console.log('before', Ahmad);
// for (let i = 0; i < Ahmad.likes.length; i++) {
//     console.log(Ahmad.likes[i]);

// }

// // adding new property
// Ahmad.disLikes = ['eat', 'sleep', 'dance'];

// console.log('after', Ahmad);


// this keyword in the object


// ====== const ========
// const car = {
//     name: 'BMW',
// }

// console.log(car);
// console.log(car.name);

// // add to the const object
// car.color = 'red'
// console.log(car);

// car.name = 'MKZ';
// console.log(car);

// // car = 200; // wrong object to number

// Ahmad = 250;
// console.log(Ahmad); // done


// ======== DOM:

console.log(document);

// document.write('hello');
// document.write('<h3>' + 'hello' + '</h3>')


// get the parent tag

let parent = document.getElementById('parent');
console.log(parent);

// create child element
let child = document.createElement('p');
// console.log(child);

// append
parent.appendChild(child);

// give it some content
child.textContent = 'Hello from js';

// create list
let unOrderedList = document.createElement('ul');
parent.appendChild(unOrderedList);


for (let i = 0; i < Ahmad.likes.length; i++) {

    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = Ahmad.likes[i];
}