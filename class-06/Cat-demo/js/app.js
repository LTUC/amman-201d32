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

let frankie = {
    name: 'frankie',
    age: 0,
    likes: ['napping', 'cuddling', 'eating'],
    isGoodWithKids: true,
    isGoodWithDogs: false,
    isGoodWithOtherCats: true,

    breed: 'Angora',

    // random function
    getAge: function() {
        this.age = randomAge(3, 12) + ' Months';
    }
}
frankie.getAge();
// console.log(frankie);
// console.log(frankie.getAge());
// console.log(frankie.age);


// Global random function to have random age for the cats

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(randomAge(10, 55));


// Math.random
// random number btw 0-1

// Math.floor
// 12.9 ==> 12

// Math.ceil
// 10.1 ==> 11

// Math.round
// 10.4 ==> 10
// 10.6==>11

// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element

// get parent
let parent = document.getElementById('kittenProfiles');
console.log(parent);


// create a new element, or elements, that represent frankie


// inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image
let header2 = document.createElement('h2');
parent.appendChild(header2);
header2.textContent = frankie.name;

let paragraph = document.createElement('p');
parent.appendChild(paragraph);
paragraph.textContent = `Frankie is Adorable ${frankie.age} old`


let unOrderedList = document.createElement('ul');
parent.appendChild(unOrderedList);
for (let i = 0; i < frankie.likes.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList.appendChild(listItem);
    listItem.textContent = frankie.likes[i];
}

// images/frankie.jpeg
let image = document.createElement('img');
parent.appendChild(image);

image.setAttribute('src', 'images/' + frankie.name + '.jpeg');
image.setAttribute('alt', 'cute pic of ' + frankie.name + ' who is ' + frankie.age)


// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild