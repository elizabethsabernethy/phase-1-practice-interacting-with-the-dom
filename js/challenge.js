//Variables

let counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const form = document.getElementById('comment-form');
const submit = document.getElementById('submit');
const input = document.getElementById('comment-input');

let likedAmount = 0;
let paused = false;

function countTimer(){
setInterval(()=> {
    if(paused === false){
        counter.innerHTML++;
        likedAmount = 0;
    }
}, 1000)
}

function increaseCounter(){
    plus.addEventListener('click', ()=> {
        counter.innerHTML++;
        likedAmount = 0;
    })
}
 
function decreaseCounter(){
    minus.addEventListener('click', ()=> {
        counter.innerHTML--;
        likedAmount = 0;
    })
}

function likingCounter(){
heart.addEventListener('click', ()=> {
    likedAmount++;
    let like = document.createElement('li');
    let likesList = document.querySelector('ul');
    likesList.append(like);
;    like.innerHTML = `Liked number ${counter.innerHTML}: ${likedAmount} times` 
})
}

function pausingCounter(){
    pause.addEventListener('click', ()=>{
        if(paused == false){
            paused = true;
            pause.innerHTML = 'resume';
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        }
        else if(paused == true){
            paused = false;
            pause.innerHTML = 'pause';
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        }
    })
}

function leaveAComment(){
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let comment = document.createElement('p');
        comment.append(input.value);
        let list = document.getElementById('list');
        list.append(comment);
    })
}


increaseCounter();
decreaseCounter();
likingCounter();
countTimer();
pausingCounter();
leaveAComment();