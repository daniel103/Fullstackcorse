let menu = document.getElementById('menu');
menu.addEventListener('click', onClickMenu);

function onClickMenu() {
    menu.classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
    document.getElementById('menu-bg').classList.toggle('change-bg');
};


Input = document.getElementsByClassName('text');
let user = document.getElementById('user_submit').addEventListener('click', Data);

function Data () {
    let user = [];
    for(let i = 0; i < Input.length; i++){
        user[i] = Input[i].value;
    }
    userAge(Input[3]);
    addData (user);
}

function addData (user) {
    let Field = document.getElementsByClassName('user_data');
    for(i = 0; i < Input.length-1; i++) {
        Field[i].innerHTML += user[i];
    }
}

function userAge (age) {
    let img = document.getElementById('picture');
    if (age.value >= 18){
    img.style.display = 'block';
    }
    console.log(img);
}

let par = document.createElement('p');
window.addEventListener('scroll', theRectifier)
let scrolling = 0;
function theRectifier () {
    const scroll = window.scrollY;
    
    if (scroll > 100){
        if (scrolling < scroll) {
            alert("we are going down")
            par.innerHTML = 'your down';
        } else if (scrolling > scroll) {
            alert("we are going up")
            par.innerHTML = 'your up';
        }
        
    } else 
    console.log('scroll: ' + scrolling + '   and: ' + scroll)
    scrolling = scroll;
}