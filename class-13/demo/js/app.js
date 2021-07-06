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
  /*
  {
    name: 'Bashar',
    size: '6oz',
    milk: 'Regular',
    isHot: true ,
    dType: 'latte',
  }
  */ 


  // showing the order list item
  renderOrders();
}

function saveToLs(){

  // we need to convert this array of objects
  const convertedArr = JSON.stringify(Coffee.drinks);
  // console.log(convertedArr.length);
  localStorage.setItem('Order', convertedArr);
  //[Object object] <= You didn't stringfy 
  //   //[{user: "bashar"}] => ["user" :"bashar"]
  
}

function getFromLs(){
  const data = localStorage.getItem('Order');
  console.log(data); //null
  //[{"name":"bashar","size":"6","isHot":"on","drinkType":"blackCoffee","milk":"regular"}]
  const parsedOrder = JSON.parse(data); 
  console.log(parsedOrder); // null 
  if(parsedOrder){   //parsedOrder !== null

    Coffee.drinks = parsedOrder;
    // [] = null
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