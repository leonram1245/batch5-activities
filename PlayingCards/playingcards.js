
   
    

let suits = ['♠','♥','♦','♣'];
let values = ['A','2','3','4','5','6','7','8',
'9','10','J','Q', 'K'];
 let deck = [];


 //create deck
 for( let i = 0;i<suits.length;i++){
        for(let j = 0;j<values.length;j++){
         deck.push(suits[i] +values[j]);
        }
    }


//shuffle deck
function shuffleDeck(cards){
    for (i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = cards[i]
        cards[i] = cards[j]
        cards[j] = k;
      }
      console.log(`Random Cards:${cards}`);
    }


//arrange by suit
function sortbySuit(cards){
    let deckSuit = [];
    for(elements of suits){  
for(suitindex of cards){
    if(suitindex.includes(elements)==true){
    deckSuit.push(suitindex)
    }
        }
    }
    console.log(`ArrangedbySuit:${deckSuit}`);  

}

//arange by value
function sortbyValue(cards){
    let deckValue = [];
    for(elements of values){  
for(valueindex of cards){
    if(valueindex.includes(elements)==true){
    deckValue.push(valueindex);
    }
}
    }
    console.log(`Ascending:${deckValue}`);  
    console.log(`Descending:${deckValue.reverse()}`);  
}

function cardName(card) {
    switch(card) {
        case '♥A':
            return 'Ace of Hearts';
            break;
        case '♥2':
            return 'Two of Hearts';
            break;
        case '♥3':
            return 'Three of Hearts';
            break;
        case '♥4':
            return 'Four of Hearts';
            break;
        case '♥5':
            return 'Five of Hearts';
            break;
        case '♥6':
            return 'Six of Hearts';
            break;
        case '♥7':
            return 'Seven of Hearts';
            break;
        case '♥8':
            return 'Eight of Hearts';
            break;
        case '♥9':
            return 'Nine of Hearts';
            break;
        case '♥10':
            return 'Ten of Hearts';
            break;
        case '♥J':
            return 'Jack of Hearts';
            break;
        case '♥Q':
            return 'Queen of Hearts';
            break;
        case '♥K':
            return 'King of Hearts';
            break;
        case '♦A':
            return 'Ace of Diamonds';
            break;
        case '♦2':
            return 'Two of Diamonds';
            break;
        case '♦3':
            return 'Three of Diamonds';
            break;
        case '♦4':
            return 'Four of Diamonds';
            break;
        case '♦5':
            return 'Five of Diamonds';
            break;
        case '♦6':
            return 'Six of Diamonds';
            break;
        case '♦7':
            return 'Seven of Diamonds';
            break;
        case '♦8':
            return 'Eight of Diamonds';
            break;
        case '♦9':
            return 'Nine of Diamonds';
            break;
        case '♦10':
            return 'Ten of Diamonds';
            break;
        case '♦J':
            return 'Jack of Diamonds';
            break;
        case '♦Q':
            return 'Queen of Diamonds';
            break;
        case '♦K':
            return 'King of Diamonds';
            break;
        case '♠A':
            return 'Ace of Spades';
            break;
        case '♠2':
            return 'Two of Spades';
            break;
        case '♠3':
            return 'Three of Spades';
            break;
        case '♠4':
            return 'Four of Spades';
            break;
        case '♠5':
            return 'Five of Spades';
            break;
        case '♠6':
            return 'Six of Spades';
            break;
        case '♠7':
            return 'Seven of Spades';
            break;
        case '♠8':
            return 'Eight of Spades';
            break;
        case '♠9':
            return 'Nine of Spades';
            break;
        case '♠10':
            return 'Ten of Spades';
            break;
        case '♠J':
            return 'Jack of Spades';
            break;
        case '♠Q':
            return 'Queen of Spades';
            break;
        case '♠K':
            return 'King of Spades';
            break;
        case '♣A':
            return 'Ace of Clubs';
            break;
        case '♣2':
            return 'Two of Clubs';
            break;
        case '♣3':
            return 'Three of Clubs';
            break;
        case '♣4':
            return 'Four of Clubs';
            break;
        case '♣5':
            return 'Five of Clubs';
            break;
        case '♣6':
            return 'Six of Clubs';
            break;
        case '♣7':
            return 'Seven of Clubs';
            break;
        case '♣8':
            return 'Eight of Clubs';
            break;
        case '♣9':
            return 'Nine of Clubs';
            break;
        case '♣10':
            return 'Ten of Clubs';
            break;
        case '♣J':
            return 'Jack of Clubs';
            break;
        case '♣Q':
            return 'Queen of Clubs';
            break;
        case '♣K':
            return 'King of Clubs';
            break;
    }
}



 let history = document.querySelector('#history')
let randomDeck = document.querySelector('#randomDeck')
let previousBtn = document.querySelector('#previousButton')
let nextBtn = document.querySelector('#nextButton')
let showCard = document.querySelector('#container')
let shuffleBtn = document.querySelector('#shuffleButton')

let cardStore,previouscardStore,nextcardStore,counternext,randomCard;
let historyArray = [];

shuffleDeck(deck);
showDeck();


function showDeck(){
    randomDeck.innerHTML =deck;
    }
    let counter = 0;
function dealRandomCard(){
 randomCard = deck.pop();
showCard.innerHTML =`Card Dealt:${randomCard} ${cardName(randomCard)}`
  x = history.innerHTML+=randomCard; 
 showDeck();
 historyArray.push(randomCard);
 buttonConfig();
 return x;
    } 

function buttonConfig(){
if(deck.length<50){
previousBtn.disabled = false;
        }
if(deck.length==0){
dealButton.disabled = true;
}
if(counter<=2){
    previousBtn.disabled = true;
}
if(counter==1){
showCard.innerHTML =`Card Dealt:`
nextBtn.disabled = true;
}
if(counter>historyArray.length){
    nextBtn.disabled =true;
}
}

previousButton.addEventListener('click',e=>{
    counter--;
previouscardStore=  historyArray[counter-2];
  console.log(counter);
  showCard.innerHTML =`Card Dealt:${previouscardStore} ${cardName(previouscardStore)}`
    nextBtn.disabled = false;
  buttonConfig();  
    
})

dealButton.addEventListener('click',e=>{
    counter = historyArray.length;
    console.log(counter++);
    nextBtn.disabled = true;
    previousBtn.disabled = false;
})
let nextCardStore;
nextButton.addEventListener('click',e=>{
    console.log(counter++);
    nextcardStore = historyArray[counter-2];
    console.log(historyArray.length);  
    showCard.innerHTML =`Card Dealt:${nextcardStore} ${cardName(nextcardStore)}`
    buttonConfig();
    previousBtn.disabled = false;

})

shuffleButton.addEventListener('click',e=>{
    location.reload();
})




