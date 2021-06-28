'use strict';

// literal object
// let jehad = {
//     name: 'Jehad',
//     age: 25,
//     weight: 70,
//     walk: function() {
//         console.log('I am walking');
//     }
// }
// let bashar = {
//     name: 'bashar',
//     age: 25,
//     weight: 70,
//     walk: function() {
//         console.log('I am walking');
//     }
// }


// camelCase ==> naming normal variables and functions getAge(); welcomeMsg
// Pascal==> constructor Student

// global array
let storedCreatedObj = [];
// constructor
// this will be the creator of my objects
function Student(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    // method
    this.walk = function() {
        // instead of concatenation use `${}`
        console.log(`${this.name} is walking`);
    }

    storedCreatedObj.push(this);
}

// console.log(Student);
// create new object ==> new, the name of the constructor and passing the parameters 
let jehad = new Student('Jehad', 25, 70);
// console.log(jehad);
// console.log(jehad.walk());
let baraah = new Student('Baraah', 25, 70);
// console.log(baraah);
// console.log(baraah.walk());

let yazan = new Student('Yazan', 24, 80);
// console.log(yazan);
// console.log(yazan.walk());

// you cants do this 
// Student.walk();

const qais = new Student('Qais', 26, 80); // object
qais.walk();

// console.log(Student);

let faisal = new Student('Faisal', 25, 66);
let faisal1 = new Student('Faisal', 25, 66);
let faisal2 = new Student('Faisal', 25, 66);
let faisal3 = new Student('Faisal', 25, 66);
let faisal4 = new Student('Faisal', 25, 66);
let faisa5l = new Student('Faisal', 25, 66);
let faisal5 = new Student('Faisal', 25, 66);
let faisal6 = new Student('Faisal', 25, 66);
let faisal7 = new Student('Faisal', 25, 66);
let faisal8 = new Student('Faisal', 25, 66);
let faisal9 = new Student('Faisal', 25, 66);
let faisal0 = new Student('Faisal', 25, 66);
let Diana = new Student('Diana', 25, 50);

console.log(storedCreatedObj);

// global function prototype

Student.prototype.drive = function() {
    console.log('hello');
    console.log(this.name);
}
Student.prototype.talk = function() {
    console.log('talk');
    console.log(this.name);
}
Student.prototype.eat = function() {
    console.log('talk');
    // you can call global and prototype here
    console.log(this.name);
}
Student.prototype.run = function() {
    console.log('talk');
    console.log(this.name);
}

baraah.drive();
jehad.drive();
qais.drive();

// let nums = [1, 2, 5, 5];
// console.log(nums);

console.log(Student.prototype);

// ===========================================
// ===========================================
// ===========================================
// Table

/*  
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Weight</th>
            </tr>
            <tr>
                <td>Jehad</td>
                <td>25</td>
                <td>70</td>
            </tr>
            <tr>
                <td>Baraah</td>
                <td>25</td>
                <td>70</td>
            </tr>
            <tr>
                <td>Faisal</td>
                <td>26</td>
                <td>80</td>
            </tr>
        </table>
        
*/

// DOM

// get the element
let parent = document.getElementById('creatTable');
console.log(parent);

// create table
let tableEl = document.createElement('table');
// append
parent.appendChild(tableEl);

// creating the tr in the table
let headingRow = document.createElement('tr');
tableEl.appendChild(headingRow);

let nameEle = document.createElement('th');
headingRow.appendChild(nameEle);
nameEle.textContent = 'Name';

let ageEle = document.createElement('th');
headingRow.appendChild(ageEle);
ageEle.textContent = 'Age';

let weightEle = document.createElement('th');
headingRow.appendChild(weightEle);
weightEle.textContent = 'Weight';

// for loop to have the data from the global array storedCreatedObj

for (let i = 0; i < storedCreatedObj.length; i++) {
    // console.log(storedCreatedObj[i]);
    let studentRow = document.createElement('tr');
    tableEl.appendChild(studentRow);

    let nameData = document.createElement('td');
    studentRow.appendChild(nameData);
    nameData.textContent = storedCreatedObj[i].name;


    let ageData = document.createElement('td');
    studentRow.appendChild(ageData);
    ageData.textContent = storedCreatedObj[i].age;

    let weightData = document.createElement('td');
    studentRow.appendChild(weightData);
    weightData.textContent = storedCreatedObj[i].weight;

}