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
function showSymbol(cardsOpened) {
    cardsOpened.setAttribute('class', 'card open');
    cardsOpened.push(cardsOpened);
}

/******  Add classes to card  *******/
function setOpenedCardsClasses(classes) {
    cardsOpened.forEach(function (card) {
        card.setAttribute('class', classes);
    });
}

/******  Basic game function  *******/
function checkSymbols() {
    if (cardsOpened.length === 2) {

        let starsItems = document.querySelectorAll(".stars .fa");
        moves.textContent = ++count + ' Moves';

        // Set the rate based on the moves count.
        switch (count) {
            case 6:
                starsItems[2].setAttribute('class', 'fa fa-star-o');
                starsRate--;
                break;
            case 12:
                starsItems[1].setAttribute('class', 'fa fa-star-o');
                starsRate--;
                break;
        }

        // prevent other cards to be clickable
        document.querySelector(".deck").removeEventListener('click', cardClick)
        setTimeout(function () {
            cardsOpened = [];
            document.querySelector(".deck").addEventListener('click', cardClick)
        }, 700);

        // Compare the symbols and apply the result
        if (cardsOpened[0].firstChild.classList[1] === cardsOpened[1].firstChild.classList[1]) {
            setOpenedCardsClasses('card match');

            matchedCards++;
            if (matchedCards === cardSymbols.length / 2) {
                document.querySelector(".result").classList.toggle('show');
                document.querySelector(".rate-result").textContent = starsRate;
                document.querySelector(".time-result").textContent = timer.textContent;
                document.querySelector(".moves-result").textContent = count;
                gameStarted = false;
            }

        } else {
            setOpenedCardsClasses('card mismatch');
            setTimeout(function () {
                setOpenedCardsClasses('card close')
            }, 500);
        }
    }
}

/******  Card click event and comparison  *******/
function cardClick(e) {
    if (e.target.classList.contains('card') && !e.target.classList.contains('match') && !e.target.classList.contains('open')) {
        gameStarted = true;
        showSymbol(e.target);
        checkSymbols();
    }
}

/******  Timer  *******/
function addTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
}

setInterval(function () {
    if (gameStarted) {
        addTime()
        timer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    }
}, 1000);

document.querySelector('.restart').addEventListener('click', function () {
    resetResults();
    document.querySelector(".deck").remove();
    displayNewCards();

    Array.from(document.querySelectorAll(".stars .fa")).forEach(function (c) {
        c.setAttribute('class', 'fa fa-star');
    });

});

/******  Reset  *******/
function resetResults() {
    gameStarted = false;
    seconds = 0, minutes = 0, hours = 0;
    count = 0;
    timer.textContent = '00:00:00'
    moves.textContent = '0 Moves';
    starsRate = 3;
    cardsOpened = [];
}

function resetResults() {
    gameStarted = false;
    seconds = 0, minutes = 0, hours = 0;
    count = 0;
    timer.textContent = '00:00:00'
    moves.textContent = '0 Moves';
    starsRate = 3;
    openedCards = [];
}
