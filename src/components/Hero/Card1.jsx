import React from "react";
import styled from "styled-components";
import { Push } from "../../assets/imgs";
import { Link } from "react-router-dom";
const Card = styled.div`
  padding: 84px 78px 89px 57px;
  background: #0053ff;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 81px;
  align-items: flex-start;
  @media screen and (max-width: 835px) {
    padding: 64px 58px 69px 37px;
    gap: 81px;
  }
  @media screen and (max-width: 430px) {
   width: 100%;
  }
`;
const Text = styled.div`
  width: 289px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;
export const Btn = styled.div`
  padding: 22px;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1000px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
`;
export default function Card1() {
  return (
    <Card>
      <Text>
        Кексаларни эъзозлаш - хар биримизнинг бурчимиздир номли қоланма
      </Text>
      <Link>
        <Btn>
          <img src={Push} alt="" />
          Скачать PDF
        </Btn>
      </Link>
    </Card>
  );
}
