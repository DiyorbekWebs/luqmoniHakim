import React from "react";
import styled from "styled-components";
import { Parent1, Parent2 } from "../../assets/imgs";
import Card1 from "./Card1";
import Card2 from "./Card2";
const Box = styled.div`
  padding: 80px 0px 81px 0px;
  display: flex;
  flex-direction: column;
  gap: 79px;
  @media screen and (max-width: 885px) {
    gap: 59px;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 885px) {
    flex-wrap: wrap;
    gap: 30px;
  }
  @media screen and (max-width: 835px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  @media screen and (max-width: 430px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 33px;
  padding: 0px 20px 0px 50px;
  @media screen and (max-width: 1281px) {
    padding: 0px 20px 0px 20px;
  }
  @media screen and (max-width: 835px) {
    padding: 0px 0px 0px 20px;
  }
  @media screen and (max-width: 801px) {
    padding: 0px 0px 0px 10px;
  }
  @media screen and (max-width: 430px) {
    padding: 0px;
    gap: 20px;
  }
`;
const Tex1 = styled.h1`
  width: 387px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 44px;
  color: #000000;
  @media screen and (max-width: 801px) {
    font-size: 38px;
    line-height: 40px;
  }
  @media screen and (max-width: 430px) {
    width: 310px;
    font-size: 32px;
    line-height: 35px;
  }
`;
const Paragrf = styled.p`
  width: 370px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #000000;
  opacity: 0.6;
  @media screen and (max-width: 430px) {
    width: 300px;
  }
`;
const Img1 = styled.img`
  width: 354px;
  height: 332px;
  border-radius: 24px;
  @media screen and (max-width: 885px) {
    width: 390px;
  }
  @media screen and (max-width: 835px) {
    width: 360px;
  }
  @media screen and (max-width: 801px) {
    width: 330px;
    height: 325px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 300px;
  }
`;
const Img2 = styled.img`
  width: 480px;
  height: 332px;
  border-radius: 24px;
  @media screen and (max-width: 1281px) {
    width: 400px;
    height: 332px;
  }
  @media screen and (max-width: 885px) {
    width: 100%;
    height: 400px;
    padding-left: 10px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    height: 300px;
  }
`;
const Bottom = styled.div`
  display: flex;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;
export default function Hero() {
  return (
    <div className="container">
      <Box>
        <Top>
          <Div>
            <Tex1>Hech kim mehr va e'tibordan chetda qolmaydi</Tex1>
            <Paragrf>
              O'zbek xalqida azal-azaldan keksalarga xurmat e'tiborda boʼlish,
              ularni asrab-avaylab, maslahatlariga, nasihatlarga quloq tutish,
              ularni eʼzozlash urfu-odat hamda insoniylik xususiyatlaridan
              biridir.
            </Paragrf>
          </Div>
          <Img1 src={Parent2} />
          <Img2 src={Parent1} />
        </Top>
        <Bottom>
          <Card1 />
          <Card2 />
        </Bottom>
      </Box>
    </div>
  );
}
