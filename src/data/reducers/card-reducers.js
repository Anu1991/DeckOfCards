import { CARDSHUFFLE, CARDSORT, CARDWITHDRAW } from "../actions/card-actions";

const initialCards = () => {
  const cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const cardColors = [
    {
      suitOrder: 2,
      name: "Hearts",
      symbol: "♥",
      color: "red",
    },
    {
      suitOrder: 4,
      name: "Clubs",
      symbol: "♣",
      color: "black",
    },
    {
      suitOrder: 1,
      name: "Diamonds",
      symbol: "♦",
      color: "red",
    },
    {
      suitOrder: 3,
      name: "Spades",
      symbol: "♠",
      color: "black",
    },
  ];
  const cards = [];
  for (let s = 0; s < cardColors.length; s++) {
    for (let v = 0; v < cardValues.length; v++) {
      const value = cardValues[v];
      let valueOrder = 0;
      if (cardValues[v] === "A") {
        valueOrder = cardValues.indexOf(cardValues[v]) + cardValues.length;
      } else {
        valueOrder = cardValues.indexOf(cardValues[v]) + 1;
      }
      const suit = cardColors[s];
      cards.push({ value, valueOrder, suit });
    }
  }
  return cards;
};

const cardShuffle = (card) => {
  return card.sort(() => Math.random() - 0.5);
};

const cardSort = (card) => {
  return card.sort((a, b) => {
    if (
      a.suit.suitOrder > b.suit.suitOrder ||
      (a.suit.suitOrder === b.suit.suitOrder && a.valueOrder > b.valueOrder)
    ) {
      return -1;
    }
    return 1;
  });
};

const cardWithdraw = (card, count) => {
  let picked = card.filter((v, i) => count.payload === i);
  let rest = card.filter((v, i) => count.payload !== i);
  let cardPicked = card.find((v, i) => count.payload === i);
  return { rest, picked, cardPicked };
};

const cards = initialCards();

const initialState = {
  cards: cards,
  pickedCards: [],
  picked: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDSHUFFLE:
      return {
        ...state,
        cards: cardShuffle(state.cards),
      };
    case CARDSORT:
      return {
        ...state,
        pickedCards: cardSort(state.pickedCards),
      };
    case CARDWITHDRAW:
      const c = cardWithdraw(state.cards, action.payload.count);
      return {
        ...state,
        cards: c.rest,
        pickedCards: [...state.pickedCards, ...c.picked],
      };

    default:
      return state;
  }
};

export default cardReducer;
