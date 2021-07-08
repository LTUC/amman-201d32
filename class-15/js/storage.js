'use strict';

const div = document.getElementById('container');

function getFromLs(){
    const s = localStorage.getItem('FeedBack');
    console.log(s);
    const data = JSON.parse(s);
    console.log(data);
    if(data){
    for (let i = 0; i < data.length; i++) {
        let p = document.createElement('p');
        div.appendChild(p);
        p.textContent = data[i].text;
    }
}

}
getFromLs();
