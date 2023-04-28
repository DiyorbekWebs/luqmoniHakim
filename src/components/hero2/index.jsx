import React from "react";
import styled from "styled-components";
import {
  Medicin,
  Person1,
  Person2,
  Person3,
  Person4,
  Person5,
  Persons,
} from "../../assets/imgs";
import { Link } from "react-router-dom";
const Hero = styled.div`
  padding: 0px 0px 60px 0px;
  background: #eeeeee;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 885px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Div1 = styled.div`
  padding: 40px 50px 59px 50px;
  background: #222222;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 99px;
  align-items: flex-start;
  @media screen and (max-width: 430px) {
    width: 100%;
  }
  @media screen and (max-width: 395px) {
    width: 100%;
  }
`;
const Text = styled.h1`
  width: 256px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 114%;
  color: #ffffff;
`;
const Btn = styled.button`
  padding: 22px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1000px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 120%;
  border: navajowhite;
  color: #ffffff;
  cursor: pointer;
`;
const Img = styled.img`
  width: 412px;
  height: 398px;
  border-radius: 32px;
  @media screen and (max-width: 430px) {
    width: 100%;
  }
  @media screen and (max-width: 395px) {
    width: 100%;
  }
`;
const Div2 = styled.div`
  position: relative;
  left: 0;
  top: 0;
  @media screen and (max-width: 885px) {
    display: none;
  }
`;
const Item1 = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  z-index: 1;
  width: 424px;
  height: 398px;
  display: flex;
  flex-direction: column;
  gap: 33px;
  background: #ffffff;
  border-radius: 32px;
  padding: 40px 0px 71px 50px;
  @media screen and (max-width: 1281px) {
    width: 390px;
  }
`;
const Text2 = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  color: #121212;
`;
const Item2 = styled.div`
  left: 0;
  top: 0;
  z-index: -0;
  width: 483px;
  height: 398px;
  background-color: #0053ff;
  border-radius: 32px;
  @media screen and (max-width: 1281px) {
    width: 420px;
  }
`;
const Item3 = styled(Item2)`
  position: absolute;
  width: 536px;
  opacity: 0.05;
  background: #121212;
  border-radius: 32px;
  @media screen and (max-width: 1281px) {
    display: none;
  }
  @media screen and (max-width: 885px) {
    display: block;
    width: 100%;
  }
`;
const Imges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 280px;
`;
const Img2 = styled.img`
  display: none;
  @media screen and (max-width: 885px) {
    display: block;
    
  }
`;
export default function Hero2() {
  return (
    <Hero>
      <div className="container">
        <Box>
          <Left>
            <Div1>
              <Text>
                Luqmoni Hakim tabiiy tibbiyot va gerontologiya markazi
              </Text>
              <Link>
                <Btn>Читать подробнее</Btn>
              </Link>
            </Div1>
            <Img src={Medicin} />
          </Left>
          <Div2>
            <Item1>
              <Text2>
                Luqmoni Hakim tabiiy tibbiyot va gerontologiya markazi
              </Text2>
              <Imges>
                <img src={Person1} alt="" />
                <img src={Person2} alt="" />
                <img src={Person3} alt="" />
                <img src={Person4} alt="" />
                <img src={Person5} alt="" />
              </Imges>
            </Item1>
            <Item2 />
            <Item3 />
          </Div2>
          <Img2 src={Persons} alt="" />
        </Box>
      </div>
    </Hero>
  );
}
