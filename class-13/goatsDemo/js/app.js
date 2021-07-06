'use strict';
const leftImageElement = document.getElementById('left-image');
const midImageElement = document.getElementById('mid-image');
const rightImageElement = document.getElementById('right-image');



const maxAttempts = 10;
 // max = counter stop the event !
let counter = 0; 


let arrOfNames = [];
let arrOfVotes = [];
let arrOfshown = [];


function Goat(name,source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  Goat.globArr.push(this);
  arrOfNames.push(this.name);

}

Goat.globArr = [];

new Goat('cruisin-goat','images/cruisin-goat.jpg'); // [0]
new Goat('float-your-goat', 'images/float-your-goat.jpg'); //[1]
new Goat('goat-out-of-hand','images/goat-out-of-hand.jpg');//[2]
new Goat('goat-away','images/goat-away.jpg');//[3]
new Goat('smiling-goat','images/smiling-goat.jpg');//[4]
new Goat('sweater-goat','images/sweater-goat.jpg');//[5]
new Goat('kissing-goat','images/kissing-goat.jpg');//[6]
new Goat('sassy-goat','images/sassy-goat.jpg')//[7]

console.log(Goat.globArr);
// console.log(arrOfVotes);

let leftIndex;
let midIndex;
let rightIndex;


let previouslyShown = [];

                  // 3    [4,5,10]; 

// how includes work!                  
function checking(idx,arr){
  for(let i = 0 ; i <arr.length; i++){
    if(arr[i] === idx){
        // 4  === 3 ?
        // 5 === 3 ?
        // 10 === 3? 
      return true;
    }
  }
  return false;
}


function renderThreeImages(){
  leftIndex = generateRandomIndex(); // 3
  midIndex = generateRandomIndex();
  rightIndex = generateRandomIndex(); 
  console.log('Before :',previouslyShown);


  while(leftIndex === rightIndex || leftIndex === midIndex || midIndex === rightIndex || previouslyShown.includes(leftIndex) || previouslyShown.includes(midIndex) || checking(rightIndex,previouslyShown)){
    leftIndex = generateRandomIndex(); 
    rightIndex = generateRandomIndex();
    midIndex = generateRandomIndex();
  }

  // previouslyShown[0] = leftIndex;
  // previouslyShown[1] = midIndex;
  previouslyShown = [];
  previouslyShown.push(leftIndex,midIndex,rightIndex);
  // [3,4,5,12,20,15]
  // previouslyShown = [leftIndex,midIndex,rightIndex];
  console.log('after :',previouslyShown);

  leftImageElement.src = Goat.globArr[leftIndex].source;
  Goat.globArr[leftIndex].shown++;
  //  [3].shown ++ ;
  midImageElement.src = Goat.globArr[midIndex].source;
  Goat.globArr[midIndex].shown++;
  rightImageElement.src = Goat.globArr[rightIndex].source;
  Goat.globArr[rightIndex].shown++;

  

}

renderThreeImages();

const section = document.getElementById('sec-one');
section.addEventListener('click',handleClick);


let btnEl;
function handleClick(event){
  counter ++ ;
  console.log('The thing i am clicking!',event.target);
  if(maxAttempts >= counter){
          if(event.target.id === 'left-image'){
            Goat.globArr[leftIndex].votes++;
          }else if(event.target.id ==='mid-image'){
            Goat.globArr[midIndex].votes++;
          }
          else if(event.target.id ==='right-image'){
            Goat.globArr[rightIndex].votes++;
          }else{
            counter --;
            return
          }
          renderThreeImages();
  }else{
    console.log('Stop clicking! ',Goat.globArr);
    // for(let i = 0 ; i <Goat.globArr.length; i++){
    //   arrOfVotes.push(Goat.globArr[i].votes)
    //   arrOfshown.push(Goat.globArr[i].shown);
    // }
    btnEl = document.getElementById('btn');
    btnEl.addEventListener('click', handleShow);
    section.removeEventListener('click',handleClick)
  }
}

function handleShow(){
  renderList();
  gettingChart();
  btnEl.removeEventListener('click',handleShow);
}


function renderList(){
  const ul = document.getElementById('unList');
  for(let i = 0 ; i < Goat.globArr.length; i++){
    arrOfVotes.push(Goat.globArr[i].votes)
    arrOfshown.push(Goat.globArr[i].shown);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Goat.globArr[i].name} has this number of votes ${Goat.globArr[i].votes} and it has been displayed ${Goat.globArr[i].shown}`
  }


}



function generateRandomIndex(){
    return Math.floor(Math.random() * Goat.globArr.length);
                      // 0.99999 * 8
                      // 7.99999  floor => 7
}



function gettingChart(){
let ctx = document.getElementById('myChart')
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrOfNames,
        datasets: [{
            label: '# of Votes',
            data: arrOfVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },{
          label: '# of Shown',
          data: arrOfshown,
          backgroundColor: [
            'rgb(54, 162, 235)'
          ]
        }]
    },
})
}

