'use strict';

const allCats = [];
const catform = document.getElementById('catform');
const catlist = document.getElementById('catlist');

function Cat(name){
  this.name = name;
  allCats.push(this);
}
Cat.prototype.render = function(){
  const listItem = document.createElement('li');
  listItem.textContent = this.name;
  catlist.appendChild(listItem);
}

function handleCatSubmit(e){
  e.preventDefault();
  const newCat = new Cat(e.target.kitteh.value);
  // new instance!
  catform.reset();
  newCat.render();
  localStorage.cats = JSON.stringify(allCats);
  // localStorage.setItem('cats',JSON.stringify(allCats))
  console.log('this is what is in local storage', localStorage.cats);
}
console.log(allCats);
