/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    Name: 'Donald',
    Hand: []
  },
  {
    Name: 'Mike',
    Hand: []
  },
  {
    Name: 'Joe',
    Hand: []
  },
  {
    Name: 'Kamala',
    Hand: []
  }
];

const cards = [];

const createCards = () => {
  const suits = ['diamonds', 'hearts', 'clubs', 'spades'];

  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  for (let s = 0; s < suits.length; s++) {
    for (let r = 0; r < ranks.length; r++) {
      const card = {};
      card.suit = suits[s];
      card.rank = ranks[r];
      cards.push(card);
    }
  }
};

const shuffle = () => {
  for (let i = 0; i < cards.length; i++) {
    const randomPosition = Math.floor(Math.random() * cards.length);
    const placeholder = cards[i];
    cards[i] = cards[randomPosition];
    cards[randomPosition] = placeholder;
  }
};

const deal = () => {
  for (let i = 0; i < players.length; i++) {
    players[i].Hand = [];
    players[i].Hand.push(cards[0], cards[1]);
    cards.shift();
    cards.shift();
  }
};

const score = () => {
  for (let i = 0; i < players.length; i++) {

    if (players[i].Hand[0].rank === 'A') {
      players[i].Score = 11;
    } else if (players[i].Hand[0].rank === 'K' || players[i].Hand[0].rank === 'Q' || players[i].Hand[0].rank === 'J') {
      players[i].Score = 10;
    } else {
      players[i].Score = players[i].Hand[0].rank * 1;
    }

    if (players[i].Hand[1].rank === 'A') {
      players[i].Score += 11;
    } else if (players[i].Hand[1].rank === 'K' || players[i].Hand[1].rank === 'Q' || players[i].Hand[1].rank === 'J') {
      players[i].Score += 10;
    } else {
      players[i].Score += players[i].Hand[1].rank * 1;
    }

  }
};

declareWinner = () => {
  let winningScore = 0;
  let winner;
  for (let i = 0; i < players.length; i++) {
    if (players[i].Score > winningScore) {
      winningScore = players[i].Score;
      winner = players[i].Name;
    }
  }
  return `${winner} wins with ${winningScore} points`;
};
