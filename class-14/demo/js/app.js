'use strict';

// target our order form from the html
const orderForm = document.getElementById('orderForm');
const orders = document.getElementById('orders');

// constructor function to create a basic drink
// 'rami' '12' 'on' 'latte' 'almond'

function Coffee(name, size, milk, isHot, drinkType){
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);
  saveToLs();
}


Coffee.prototype.drink = function(){
 console.log('Reinstantioation');

}


Coffee.prototype.choosing = function(){
  console.log(`${this.name} ordred ${this.drinkType}`);
}

// set the global array to empty
Coffee.drinks = [];

orderForm.addEventListener('submit', handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  const newName = event.target.name.value;
  const size = event.target.size.value;
  const isHot = event.target.isHot.value;
  const dType  = event.target.drinkType.value;
  const milk = event.target.milk.value;

  new Coffee(newName, size, milk, isHot, dType);

  console.log(Coffee.drinks);

  renderOrders();
}

function saveToLs(){
  // console.log(Coffee.drinks);

  // we need to convert this array of objects
  const convertedArr = JSON.stringify(Coffee.drinks);
  // console.log(convertedArr.length);
  localStorage.setItem('Order', convertedArr);

}

function getFromLs(){

  const data = localStorage.getItem('Order');
  console.log(data); //null
  const parsedOrder = JSON.parse(data); 
  // the array of objects that we're retriving from the Local Storage!
  // console.log(parsedOrder[0].name, parsedOrder[1].drinkType);
  // parsedOrder.drink();
  // (name, size, milk, isHot, drinkType)
  if(parsedOrder){   
    for(let i = 0 ; i < parsedOrder.length; i++ ){
      let reInst = new Coffee(parsedOrder[i].name,parsedOrder[i].size,parsedOrder[i].milk, parsedOrder[i].isHot,parsedOrder[i].drinkType);
      // Coffee.drinks[i].drink();
      console.log(reInst);

    }
    // Coffee.drinks = parsedOrder;
    renderOrders();
  }
}


function renderOrders(){
  // clear all my current uls to prevent duplicate information
  orders.textContent = '';
                        // [{}]
                        //null 
  for(let i = 0; i < Coffee.drinks.length; i++){
    const drinkLI = document.createElement('li');
    let temp;
    if(Coffee.drinks[i].isHot === 'on'){
      temp = 'cold';
    } else{
      temp = 'hot';
    }
    orders.appendChild(drinkLI);
    drinkLI.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
  }
}

// Add an event listener to the submit button


getFromLs();