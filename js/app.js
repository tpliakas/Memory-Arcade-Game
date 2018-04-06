let cardsOpened = [];
let cardsMatched = 0;
let count = 0;
let starsRate = 3;
let gameStarted = false;
let seconds = 0, minutes = 0, hours = 0;
const moves = document.querySelector('.moves');
const timer = document.querySelector('.time');

/******  List of cards  *******/
let cardSymbols = ["fa-flag", "fa-car", "fa-anchor", "fa-truck", "fa-drop",
    "fa-leaf", "fa-bicycle", "fa-bomb", "fa-flag", "fa-car",
    "fa-anchor", "fa-truck", "fa-drop", "fa-leaf", "fa-bicycle", "fa-bomb"];

displayNewCards();

/******  Shuffle cards and draw board  *******/
function displayNewCards() {

  cardSymbols = shuffle(cardSymbols);
  
  let entireContainer = document.querySelector('.container');
  const cardsContainer = document.createElement("ul");
  cardsContainer.classList.add('deck');
  
  for (let i = 0; i < cardSymbols.length; i++) {
    let cardItem = document.createElement("li");
    cardItem.classList.add("card");
    cardItem.classList.add("close");
  
    let cardContent = document.createElement("li");
    cardContent.classList.add("fa");
    cardContent.classList.add(cardSymbols[i]);
  
    cardItem.appendChild(cardContent);
    cardsContainer.appendChild(cardItem);
   }
  
  entireContainer.appendChild(cardsContainer);
  document.querySelector(".deck").addEventListener('click', cardClick)
}

/******  Shuffle array  *******/

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/******  Open card  *******/
function showSymbol(openedCard) {
    openedCard.setAttribute('class', 'card open');
    openedCards.push(openedCard);
}

/******  Add classes to card  *******/
function setOpenedCardsClasses(classes) {
    openedCards.forEach(function (card) {
        card.setAttribute('class', classes);
    });
}

// const visualTimer = document.getElementById('visual-timer');
// let seconds = 0;
// let minutes = 0;

//   timer = setInterval(function() {
//     seconds++;
//     if (seconds >= 60) {
//       seconds = 0;
//       minutes++;
//     }
//     if (minutes >= 60) {
//         visualTimer.textContent = 'Well, that\'s a lot!';
//       clearInterval(timer);
//     }
//     visualTimer.textContent = minutes + ' : ' + seconds;
//   }, 1000);


// /* Stars Rating */
// if (Try <= 8) {
//   stars = 3;
// } else if (Try > 8 && Try <= 15) {
//   stars = 2;
// } else {
//   stars = 1;
// }



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
