
let cards = [

{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}

]

let cardsInPlay = [];

function checkForMatch() {


	if (cardsInPlay.length === 2) {
			//console.log("two cards flipped");
		

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	  	console.log("You found a match!");
	 } 
		else {
		alert("Sorry, try again.");
  		console.log("Sorry, try again.");
		}

replayTheGame();

	}

}

function flipCard() {

	let cardId = this.getAttribute('data-id');

	console.log("User flipped "+cards[cardId].rank);
	console.log("Image Path "+cards[cardId].cardImage);
	console.log("Suit "+cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	console.log(this);
	
	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();	
		
}


function createBoard() {

		var button = document.createElement("button");
button.innerHTML = "Do Something";

	for (let i=0; i < cards.length; i++) {

		//console.log("length = "+cards.length);

	let cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);

	let gameBoard = document.getElementById("game-board");
	gameBoard.appendChild(cardElement);
	}
}

function replayTheGame() {

	// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Replay";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  location.reload();
});

}


createBoard();



