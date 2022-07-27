//declaration amd initialization of variables
var player = document.querySelector('#Title');
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');

//execute on clicking the button
function cast(){
  // dice 1 code
  //random Number Selector
var randomplayer1 = Math.floor(Math.random() * 6 + 1);
//random dice selector
var player1image = 'immages/dice'+ randomplayer1 + '.png';
//changing attribute to change to the randomly selected pictures
player1.setAttribute('src' , player1image);


//dice 2 code
//random number selector
var randomplayer2 = Math.floor(Math.random() * 6 + 1);
//random dice Selector
var player2image = 'immages/dice' +randomplayer2 +'.png';
//changing the source
player2.setAttribute("src" , player2image);


//result parameters

if(randomplayer1 > randomplayer2){
  player.textContent = "Player 1 wins"
} else if (randomplayer1 < randomplayer2) {
  player.textContent = "player 2 wins"
}else{
  player.textContent = "Tie"
}

}
