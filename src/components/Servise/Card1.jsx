import React from "react";
import styled from "styled-components";
import { Robpt2 } from "../../assets/imgs";
const Card = styled.div`
  padding: 31px 73px 39px 50px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 83px;
  cursor: default;
  @media screen and (max-width: 1281px) {
    padding: 30px 38px 33px 38px;
    gap: 60px;
  }
  @media screen and (max-width: 885px) {
    padding: 30px 35px 33px 35px;
    gap: 50px;
  }
  @media screen and (max-width: 835px) {
    padding: 0px 30px 0px 25px;
    gap: 30px;
  }
  @media screen and (max-width: 801px) {
    padding: 0px 40px 0px 40px;
    gap: 10px;
  }
  
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 92px;
`;
const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
const Btn = styled.div`
  padding: 10px 20px;
  background: #ffffff;
  border: 1px solid #0053ff;
  border-radius: 32px;
  transition: 0.7s;
  color: #0053ff;
  &:hover {
    color: #fff;
    transition: 0.7s;
    background-color: #0053ff;
  }

  cursor: pointer;
  @media screen and (max-width: 835px) {
    padding: 10px 20px;

  }
`;
const Text = styled.p`
  width: 182px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  @media screen and (max-width: 835px) {
    width: 162px;
  }
`;
const Botm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
`;
const Paragrf = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  opacity: 0.6;
  width: 287px;
  @media screen and (max-width: 801px) {
    width: 250px;
  }
`;
const Img = styled.img``;
export default function Card1() {
  return (
    <Card>
      <Right>
        <Title>Кардиология</Title>
        <Botm>
          <Btn>
            <Text>150 Услуг</Text>
          </Btn>
          <Paragrf>
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.
          </Paragrf>
        </Botm>
      </Right>
      <Img src={Robpt2}></Img>
    </Card>
  );
}
