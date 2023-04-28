import React from "react";
import styled from "styled-components";
import Card2 from "./Card2";
import Card1 from "./Card1";
import Card3 from "./Card3";
const Div = styled.div`
  padding: 84px 108px;
  background: #eeeeee;
  @media screen and (max-width: 1281px) {
    padding: 73px 0px 97px 0px;
  }
  @media screen and (max-width: 885px) {
    padding: 73px 0px 97px 0px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Cards = styled.div`
  display: flex;
  width: 1320px;
  flex-wrap: wrap;
  gap: 24px;
  @media screen and (max-width: 885px) {
    flex-wrap: wrap;
    width: 850px;
    gap: 15px;
  }
  @media screen and (max-width: 835px) {
    flex-wrap: wrap;
    width: 800px;
    gap: 10px;
  }
  @media screen and (max-width: 801px) {
    flex-wrap: wrap;
    width: 750px;
    gap: 10px;
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    align-items: center;
  }
`;
const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  color: #000000;
`;
export default function Servise() {
  return (
    <Div>
      <div className="container">
        <Box>
          <Title>Наши услуги</Title>
          <Cards>
            <Card1></Card1>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            <Card3 />
          </Cards>
        </Box>
      </div>
    </Div>
  );
}
