'use strict';
const posts = document.getElementById('feedback-posts');


// Constructor function 
function FeedBack(text){
    this.text = text;
    FeedBack.all.push(this);
}

FeedBack.all = [];


const val = document.getElementById('form-thing');

val.addEventListener('submit' , function(e){
    // anonymous function 
    e.preventDefault();
    const sub = e.target.subject.value;
    new FeedBack(sub);

    renderFeedBack();

    localStorage.setItem('FeedBack', JSON.stringify(FeedBack.all));
    val.reset();

});

function getFeedBack(){
    const feeds = localStorage.getItem('FeedBack');
    const arrOfFeed = JSON.parse(feeds);

    if(arrOfFeed){
        FeedBack.all = arrOfFeed;
    }
    renderFeedBack();


}

getFeedBack();

function renderFeedBack(){
    posts.textContent = '';
    let p = null;
    for (let i = 0; i < FeedBack.all.length; i++) {
        p = document.createElement('p');
        posts.appendChild(p);
        p.textContent = FeedBack.all[i].text;

    }


}



