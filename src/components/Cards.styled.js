import styled from "styled-components";
import img from "../assets/poker-card-image.jpeg";

export const CardContainer = styled.div`
  border: 8px solid #fff;
  border-radius: 3rem;
`;

export const CardWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(52, 22px);
  transition: grid-template-columns 0.5s;
`;

export const CardWrapperPicked = styled.div`
  border: 8px solid #fff;
  margin: 20px;
  display: grid;
  grid-gap: 4.5rem;
  grid-template-columns: repeat(52, 22px);
`;

export const Card = styled.div`
  width: 84px;
  height: 100px;
  margin: 0 auto;
  float: left;
  perspective: 300px;

  :hover {
    > div {
      transform: rotateY(180deg);
      transition: transform 1s;
      position: absolute;
      top: 70px;
    }
  }
`;

export const CardPicked = styled.div`
  width: 84px;
  height: 100px;
  margin: 0 auto;
  float: left;
  perspective: 500px;
`;



export const CardDisplay = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  transition: transform 1s;
  transform-style: preserve-3d;
`;

export const CardValueFront = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${img});
  background-size: contain;
  line-height: 300px;
  color: #03446a;
  text-align: center;
  font-size: 40px;
  border-radius: 5px;
  backface-visibility: hidden;
  border: 2px solid #fff;
`;

export const Button = styled("button")`
  border: 1px solid grey;
  border-radius: 20px;
  margin: 28px;
  font-size: 18px;
  background-color: #04043d;
  color: #fff;
  padding: 20px;
  cursor: pointer;
`;

export const CardValueBack = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  line-height: 100px;
  color: ${(props) => (props.color === "black" ? "black" : "red")};
  text-align: center;
  font-size: 40px;
  border-radius: 5px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border: 2px solid #000;
`;

export const PickedCardValueBack = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  line-height: 100px;
  color: ${(props) => (props.color === "black" ? "black" : "red")};
  text-align: center;
  font-size: 40px;
  border-radius: 5px;
  border: 2px solid #000;
`;

export const Top = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  justify-content: space-between;
`;
export const Bottom = styled.div`
  align-items: center;
  display: flex;
  font-size: 22px;
  justify-content: space-between;
`;
