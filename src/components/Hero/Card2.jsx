import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "./Card1";
import { Book, Push } from "../../assets/imgs";
const Card = styled.div`
  padding: 41px 0px 22px 66px;
  display: flex;
  background: #222222;
  align-items: center;
  overflow: hidden;
  border-radius: 32px;
  @media screen and (max-width: 885px) {
    padding: 41px 0px 22px 50px;
  }
  @media screen and (max-width: 835px) {
    padding: 64px 58px 69px 37px;
    gap: 81px;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Title = styled.h1`
  width: 494px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  @media screen and (max-width: 885px) {
    width: 400px;
  }
  @media screen and (max-width: 801px) {
    width: 300px;
  }
`;
const Text = styled.div`
  width: 339px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
  opacity: 0.6;
  @media screen and (max-width: 801px) {
    width: 300px;
  }
  
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  align-items: flex-start;
`;
const Img = styled.img`
  margin-left: -200px;
  @media screen and (max-width: 885px) {
    display: none;
  }
`;
export default function Card2() {
  return (
    <Card>
      <Left>
        <Texts>
          <Title>
            Кексаларни эъзозлаш - хар биримизнинг бурчимиздир номли қоланма
          </Title>
          <Text>
            Ўзбек халқида азал-азалдан кексаларга хурмат эътиборда бўлиш, уларни
            асраб-авайлаб,
          </Text>
        </Texts>
        <Link>
          <Btn>
            <img src={Push} alt="" />
            Скачать PDF
          </Btn>
        </Link>
      </Left>
      <Img src={Book} alt="" />
    </Card>
  );
}
