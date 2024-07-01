import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onCardShuffle,
  onCardWithdraw,
  onCardSort,
} from "../data/actions/card-actions";
import {
  CardContainer,
  Card,
  CardDisplay,
  CardValueFront,
  CardValueBack,
  Button,
  CardWrapper,
  PickedCardValueBack,
  CardWrapperPicked,
  CardPicked,
} from "./Cards.styled";

const Cards = () => {
  const { cards, pickedCards } = useSelector((s) => s.card);
  const dispatch = useDispatch();

  const onShuffle = () => {
    dispatch(onCardShuffle());
  };

  const onSort = () => {
    dispatch(onCardSort());
  };

  const onWithdraw = (count) => {
    dispatch(onCardWithdraw({ payload: count }));
  };

  return (
    <>
      <CardContainer>
        <CardWrapper>
          {cards.map((c, count) => (
            <Card key={count} onClick={() => onWithdraw(count)}>
              <CardDisplay>
                <CardValueFront></CardValueFront>
                <CardValueBack color={c.suit.color}>
                  {c.value} {c.suit.symbol}
                </CardValueBack>
              </CardDisplay>
            </Card>
          ))}
        </CardWrapper>
      </CardContainer>
      <CardWrapperPicked>
        {pickedCards &&
          pickedCards.map((p, count) => (
            <CardPicked key={count}>
              <CardDisplay>
                <CardValueFront></CardValueFront>
                <PickedCardValueBack color={p.suit.color}>
                  {p.value} {p.suit.symbol}
                </PickedCardValueBack>
              </CardDisplay>
            </CardPicked>
          ))}
      </CardWrapperPicked>
      <Button onClick={onShuffle}>Shuffle</Button>
      <Button onClick={onSort}>Sort</Button>
    </>
  );
};

export default Cards;
