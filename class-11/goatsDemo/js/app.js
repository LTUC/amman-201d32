'use strict';
/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats
  Let students participate by suggesting the steps needed to make the app run
  Continue until students have provided enough detail that they feel confident they could build the app themselves

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 10 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool goat',
    votes: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects
  // [{}, {} , {} ..]
  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/


const leftImageElement = document.getElementById('left-image');
const rightImageElement = document.getElementById('right-image');


const maxAttempts = 10;
 // max = counter stop the event !
let counter = 0; 





function Goat(name,source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  Goat.globArr.push(this);
}

Goat.globArr = [];

// let globArr = [];

new Goat('cruisin-goat','images/cruisin-goat.jpg'); // [0]
new Goat('float-your-goat', 'images/float-your-goat.jpg'); //[1]
new Goat('goat-out-of-hand','images/goat-out-of-hand.jpg');//[2]
new Goat('goat-away','images/goat-away.jpg');//[3]
new Goat('smiling-goat','images/smiling-goat.jpg');//[4]
new Goat('sweater-goat','images/sweater-goat.jpg');//[5]
new Goat('kissing-goat','images/kissing-goat.jpg');//[6]
new Goat('sassy-goat','images/sassy-goat.jpg')//[7]

// console.log(Goat.globArr);


let leftIndex;
let rightIndex;

function renderTwoImages(){
  leftIndex = generateRandomIndex();  // 6
  rightIndex = generateRandomIndex(); // 6 

  // console.log('Before',leftIndex);
  // console.log('Before',rightIndex);
        //6             //6  T
  while(leftIndex === rightIndex){
    leftIndex = generateRandomIndex(); // 6 
  }

  // console.log('After',leftIndex);
  // console.log('After',rightIndex);
  leftImageElement.src = Goat.globArr[leftIndex].source;
  rightImageElement.src = Goat.globArr[rightIndex].source;
                                        // 0 - 7

}

renderTwoImages();


// const section = document.getElementById('sec-one');

// section.addEventListener('click',handleClick);

// leftImageElement.addEventListener('click',handleClick);
// rightImageElement.addEventListener('click',handleClick);
// 10 
// 0
function handleClick(event){
  counter ++ ;
  // console.log(event);
  // console.log(event.target.id);
      // 10           11
      // to make sure about the rounds ! 10
      // 10              11 
  if(maxAttempts >= counter){
          if(event.target.id === 'left-image'){
            Goat.globArr[leftIndex].votes++;
          }else if(event.target.id ==='right-image'){
            Goat.globArr[rightIndex].votes++;
          }
          renderTwoImages();
  }else{
      renderList();
  }
}


function renderList(){
  const ul = document.getElementById('unList');
  for(let i = 0 ; i < Goat.globArr.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Goat.globArr[i].name} has this number of votes ${Goat.globArr[i].votes}`
  }
  leftImageElement.removeEventListener('click',handleClick);
  rightImageElement.removeEventListener('click',handleClick);
}



function generateRandomIndex(){
    return Math.floor(Math.random() * Goat.globArr.length);
                      // 0.99999 * 8
                      // 7.99999  floor => 7
}


// 5
// 5









// function Jeans(price,size){
//   this.price = price;
//   this.size = size;

// }

// Jeans.allPrices = [];


// function Shirts (price, type){
//   this.price = price;
//   this.type = type;
//   Shirts.allShirts.push(this);
// }

// Shirts.allShirts  = [];
