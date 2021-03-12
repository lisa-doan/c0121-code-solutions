console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {name: 'player1', hand: [], score: 0},
  {name: 'player2', hand: [], score: 0},
  {name: 'player3', hand: [], score: 0},
  {name: 'player4', hand: [], score: 0}
]

var dealCount = 0;
var deckShuffled = _.shuffle(createDeck());

dealCards();

function createDeck() {
  var deck = [];
  var rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var suit = ['club', 'diamond', 'heart', 'spade'];
  for(var i = 0; i < rank.length; i++) {
    for(var j = 0; j < suit.length; j++) {
      var card = [];
      card.push(rank[i]);
      card.push(suit[j]);
      deck.push(card);
    }
  }
  return deck;
};

function dealCards() {
  for(var i = 0; i < players.length; i++) {
    players[i].hand.push(deckShuffled.shift());
    }
    dealCount++;
    if(dealCount < 2) {
    dealCards();
    return;
  }
  calculateScore();
  findWinner();
};

function calculateScore() {
  var faceCards = {
    ace: 11,
    king: 10,
    queen: 10,
    jack: 10
  };
  for(var i = 0; i < players.length; i++) {
    for(var j = 0; j < 2; j++) {
      if(faceCards[players[i].hand[j][0]]) {
        players[i].score += faceCards[players[i].hand[j][0]]
      } else {
        players[i].score += players[i].hand[j][0];
      }
    }
  }
};

function findWinner() {
  var winner = players[0].name;
  var score = 0;
  for(var i = 0; i < players.length; i++) {
    if(players[i].score > score) {
      winner = players[i].name;
      score = players[i].score;
    }
  }
console.log(`The winner is ${winner}!`);
};
