// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";

//create an array for cards
let cards = ["queen", "queen", "king", "king"];
//declare variable cardsInPlay with empty array
let cardsInPlay = [];
//declares variable for board
let board = document.getElementById('game-board');

function createBoard() {
  for (let i = 0; i < cards.length; i++){
    //create cards
    let cardElement = document.createElement("div");
    //gives the card the class of card
    cardElement.className = 'card';
    //this will set the card's 'data-card' to be the element of the array
    cardElement.setAttribute('data-card', cards[i]);
    //adds click listener to each card then runs the function isTwoCards
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }
}
//checks to see if there are cards in play
function isTwoCards(){
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="king.png"; alt="King of Diamonds"/>';
  } else {
    this.innerHTML = '<img src="queen.png" alt="Queen of Diamonds"/>';
  }
  //if 2 cards in play check for match
  if (cardsInPlay.length === 2){
    //passes cardsInPlay to is match function
    isMatch(cardsInPlay);
    //clear cards in play array for next try
    cardsInPlay = [];
  }
}

function isMatch(cards){
  if(cards[0] === cards[1]){
setTimeout(function(){alert("You found a match!")}, 1500);
  } else {
    setTimeout(function(){alert("Sorry, try again!")}, 1500);

  }
}

 createBoard();

// function createCards(){
//   //creates new div element
//   // and gives it card class
//   for (i=0; i<4; i++){
//     let card = document.createElement("div");
//
//     board.appendChild(card);

  // let newCard = document.createElement("div");
  // let cardClass = document.textContent = "im a new card";
  // board.appendChild(newCard);



// if (cardTwo === cardFour) {
//   alert("Sorry, try again.");
// } else if (cardTwo === cardOne)  {
//   alert("You found a match!");
// }
