// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

'use strict';
///////constructor function
function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids) {
    this.name = name;
    this.interests = interests;
    this.isGoodWithCats = isGoodWithCats;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithKids = isGoodWithKids;
}

// create an object
let frankie = new Kitten('frankie', ['napping', 'eating cheese', 'cuddling'], false, false, true);
console.log(frankie);

let jumper = new Kitten('jumper', ['playing with strings', 'eating mouses', 'cuddling'], true, false, true);
console.log(jumper);

let serena = new Kitten('serena', ['napping', 'eating cheese', 'cuddling'], false, false, true);
console.log(serena);
// ===================================================================================================

// create global function to have random age
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// prototype
Kitten.prototype.getAge = function() {
    // I can create new property in the prototype, is already in the constructor
    this.age = random(3, 12) + ' Months'
}

// frankie.getAge();
// jumper.getAge();
// serena.getAge();

// another prototype
Kitten.prototype.sound = function() {
    console.log('Meaw');
}

frankie.sound();

// =================== rendering the data ========================

Kitten.prototype.render = function() {
    this.getAge();
    // get the html element
    const parentElement = document.getElementById('kittenProfiles');
    console.log(parentElement);
    // /creating the article
    const article = document.createElement('article');
    parentElement.appendChild(article);

    // create the h2
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.name;

    // create p
    let p = document.createElement('p');
    article.appendChild(p);
    p.textContent = `${this.name} is adorable cat and is ${this.age} old`;

    // ul
    const ul = document.createElement('ul');
    article.appendChild(ul);
    // li 
    for (let i = 0; i < this.interests.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = this.interests[i]
    }

    // create img
    let img = document.createElement('img');
    article.appendChild(img);
    img.setAttribute('src', `images/${this.name}.jpeg`);
    img.setAttribute('alt', `this is an image of a cat with name ${this.name} and age ${this.age}`);

    // create table
    let tableElement = document.createElement('table');
    parentElement.appendChild(tableElement);

    // tr th
    let headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);

    let th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = 'Good With Cats';

    let th2 = document.createElement('th');
    headerRow.appendChild(th2);
    th2.textContent = 'Good With Dogs';

    let th3 = document.createElement('th');
    headerRow.appendChild(th3);
    th3.textContent = 'Good With Kids';



    // tr for the data td
    let dataRow = document.createElement('tr');
    tableElement.appendChild(dataRow);

    // td
    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = this.isGoodWithCats;

    let td2 = document.createElement('td');
    dataRow.appendChild(td2);
    td2.textContent = this.isGoodWithDogs;

    let td3 = document.createElement('td');
    dataRow.appendChild(td3);
    td3.textContent = this.isGoodWithKids;

}

frankie.render();
jumper.render();
serena.render();