'use strict';

if (localStorage.cats) { // if its not null
  const catsFromLS = JSON.parse(localStorage.cats);
  console.log(catsFromLS);
  // catsFromLS is now an array of generic objects
  for (let i = 0; i < catsFromLS.length; i++) {
    new Cat(catsFromLS[i].name);
    allCats[i].render();
  }
}


catform.addEventListener('submit', handleCatSubmit);
