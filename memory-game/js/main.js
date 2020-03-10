
let cards = ['queen', 'queen', 'king', 'king'];

let cardsInPlay = [];

let cardOne = cards[0];

let cardTwo = cards[2]

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped: "+cardsInPlay[0]);
console.log("User flipped: "+cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	console.log("two cards flipped");
}

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");;
}
else {
	alert("Sorry, try again.");
}