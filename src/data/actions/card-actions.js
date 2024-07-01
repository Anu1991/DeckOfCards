export const CARDSHUFFLE = "CARDSHUFFLE";

export const CARDWITHDRAW = "CARDWITHDRAW";

export const CARDSORT = "CARDSORT"

export const onCardShuffle = () => {
  return {
    type: CARDSHUFFLE,
  };
};

export const onCardSort =()=>{
  return{
    type: CARDSORT,
  }
}

export const onCardWithdraw = (count) => {
  return {
    type: CARDWITHDRAW,
    payload: { count },
  };
};
