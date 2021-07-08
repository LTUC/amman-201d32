'use strict';


const btn = document.getElementById('randomizer');



const audio = document.getElementById('audThing');

btn.addEventListener('click', handler);

function handler(){
    audio.volume = Math.random();
    console.log(audio.volume);
    // to have a value between 0 - 1 
}