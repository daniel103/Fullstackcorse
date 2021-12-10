let cardFlipped = false; //describes the state before the card is clicked and flipped
let firstCard; //first card variable
let secondCard; //second card variable
let actionLock = false; //a variable which helps to "lock the board":(clicking on the same clicked card is not allow, clicking on more than 2 card is not allow)
let score = 0; //the starting point of the score
let card = document.querySelectorAll('.cards-container'); //brings the cards div's to the JS.
const cards = Array.from(card); //an Array of cards (the divs)
shuffle();


function flippingCard(){
  if (actionLock){return}
  if (this === firstCard){return}
  this.classList.toggle('flip')
  
  //check:
  // console.log('ive been clicked')
  // console.log(this)

  if(!cardFlipped) {
  
      cardFlipped = true;  
      firstCard = this

  //check:
  // console.log(cardFlipped)
  // console.log(firstCard)
  } else {
      cardFlipped = false;  
      secondCard = this;
      matchCheck()
  
  //check:
  // console.log(cardFlipped)
  // console.log(secondCard)
  // console.log(firstCard)
  }
}

function matchCheck (){
  if(firstCard.firstElementChild.dataset.cardtype === secondCard.firstElementChild.dataset.cardtype){
      firstCard.removeEventListener('click', flippingCard)
      secondCard.removeEventListener('click', flippingCard)
      score ++;
      document.getElementById('score').innerHTML = score;
      if(score == 6){
        myFunction()
      }
      
      //check:
      // console.log('cards are match');
      resetBoard();
  }else {
      //check:
      // console.log('no match');
      actionLock = true;
      setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');

      resetBoard()  
      actionLock = false; 
      }, 1000);
  }
}

function resetBoard(){
  cardFlipped = false;
  firstCard = undefined;
  secondCard = undefined;
}

cards.forEach(card => card.addEventListener('click', flippingCard))

window.addEventListener('load',() => {

  const params = (new URL(document.location)).searchParams;
  const name = params.get('nameofuser');
  const mail = params.get('email');

  document.getElementById('writename').innerHTML = name;
  document.getElementById('writemail').innerHTML = mail;
  
  localStorage.setItem("username", name);
  localStorage.setItem("usermail", mail);

} )

window.onload = function () {
  Interval = setInterval(startTimer, 1000);
}

let seconds = 0; 
let minutes = 0; 
let appendseconds = document.getElementById("seconds")
let appendminutes = document.getElementById("minutes")
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let Interval ;

buttonStart.onclick = function() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
}

buttonStop.onclick = function() {
  clearInterval(Interval);
}

function startTimer () {
  seconds++; 
  
  if (seconds < 10){
    appendseconds.innerHTML = "0" + seconds;
  }
  
  if (seconds > 9){
    appendseconds.innerHTML = seconds;
    
  } 
  
  if (seconds > 59) {
    minutes++;
    seconds = 0;
    appendseconds.innerHTML = "00";
  }
   
  if (minutes < 10){
    appendminutes.innerHTML = "0" + minutes;
  }

  if(minutes > 9){
    appendminutes.innerHTML = minutes
  }
}

function resetTimer() {
  clearInterval(Interval);
    seconds = 0;
    minutes = 0;
    appendseconds.innerHTML = "00";
    appendminutes.innerHTML = "00";
    Interval = setInterval(startTimer, 1000);
};

buttonReset.addEventListener('click', restart);

function restart(){

  for (let card of cards) {
    if (card.classList.contains('flip')){
        card.classList.toggle('flip');
        card.addEventListener('click', flippingCard);
    }

  setTimeout(() => {shuffle()}, 1000);  
  score =0;
  document.getElementById('score').innerHTML = score;
 
  clearInterval(Interval);
  setTimeout(() => {resetTimer()}, 1000); 
   
  }
}

function shuffle(){
  for (let card of cards) {
    let randomindex = Math.floor(Math.random() * cards.length);
    card.style.order = randomindex;
  }
}

function myFunction() {
  let popup = document.getElementById("popup");
  if(score == 6){
    if(minutes < 10) {
      minutes = "0" + minutes
    };
    if(seconds < 10) {
      seconds = "0" + seconds
    };
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
    clearInterval(Interval);
    popup.style.display = 'block';
    document.getElementById("name_of_user").innerHTML = localStorage.getItem("username");
    document.getElementById("mail_of_user").innerHTML = localStorage.getItem("usermail");
     document.getElementById("time_of_user").innerHTML = localStorage.getItem("minutes")+':'+localStorage.getItem("seconds");
     document.getElementById("name_user").innerHTML = localStorage.getItem("username");
     document.getElementById("mail_user").innerHTML = localStorage.getItem("usermail");
     document.getElementById("score_of_user").innerHTML = score;
    let closePopup = document.querySelector("#close")
    closePopup.addEventListener('click', (event) => {
    popup.style.display = 'none';
  })

let user_value = [
  document.getElementById("name_of_user").value = localStorage.getItem("username"),
  document.getElementById("mail_of_user").value = localStorage.getItem("usermail"),
  document.getElementById("time_of_user").value = localStorage.getItem("minutes")+':'+localStorage.getItem("seconds"),
  document.getElementById("name_user").value = localStorage.getItem("username"),
  document.getElementById("mail_user").value = localStorage.getItem("usermail"),
  document.getElementById("score_of_user").value = score
];


const myvar = Array.from(user_value);

  let whatsapp = document.getElementById('url_whatsapp');
  whatsapp.addEventListener('click',function(event){
  let wts_shareUrl = "whatsapp://send?text=" + myvar ;
  window.open(wts_shareUrl);
  event.preventDefault(whatsapp);
});


let email = document.getElementById('url_mail');
  email.addEventListener('click', function(event){
  let email_url = "mailto:?body=" + myvar;
  window.open(email_url);
  event.preventDefault(email);
    });
  };
}
