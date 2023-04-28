import React from "react";
import styled from "styled-components";
import { Robpt } from "../../assets/imgs";
const Card = styled.div`
  padding: 54px 74.5px 38px 74.5px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  background-color: white;
  align-items: center;
  cursor: default;
  justify-content: center;
  @media screen and (max-width: 1281px) {
    padding: 50px 60px 33px 56px;
    gap: 50px;
  }
  @media screen and (max-width: 885px) {
    padding: 50px 60px 33px 50px;
    gap: 50px;
  }
  @media screen and (max-width: 835px) {
    padding: 50px 50px 33px 47px;
    gap: 50px;
  }
  @media screen and (max-width: 801px) {
    padding: 50px 40px 30px 40px;
    gap: 10px;
  }
  @media screen and (max-width: 430px) {
    width: 96%;
    padding: 50px 0px;
  }
`;
const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
const Box = styled.div`
  position: relative;
`;
const Btn = styled.div`
  padding: 10px 20px;
  background: #ffffff;
  border: 1px solid #0053ff;
  border-radius: 32px;
  position: absolute;
  top: 60%;
  left: -15%;
  cursor: pointer;
  transition: 0.7s;
  color: #0053ff;
  &:hover {
    color: #fff;
    transition: 0.7s;
    background-color: #0053ff;
  }
`;
const Text = styled.p`
  width: 121px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
`;
const Img = styled.img`
  width: 121.79px;
  height: 251.53px;
`;
export default function Card2() {
  return (
    <Card>
      <Title>Кардиология</Title>
      <Box>
        <Img src={Robpt} alt="" />
        <Btn>
          <Text>150 Услуг</Text>
        </Btn>
      </Box>
    </Card>
  );
}
