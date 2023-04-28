import React from "react";
import styled from "styled-components";
import { Cardlist } from "../../constant/card";
import { Link } from "react-router-dom";
const Box = styled.div`
  padding: 91px 0px 86px 0px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Title = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  color: #000000;
`;
const Cards = styled.div`
  display: flex;
  @media screen and (max-width: 1281px) {
    gap: 7px;
  }
  @media screen and (max-width: 885px) {
    padding-left: 30px;
    gap: 30px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 801px) {
    padding-left: 0px;
    gap: 30px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 430px) {
   flex-direction: column;
   align-items: center;
  }
  
`;
const Diiv = styled.ul`
  padding: 66px 88px 70px 70px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  flex-direction: column;
  transition: 1s;
  &:hover {
    transition: 1s;
    background-color: #eee;
  }
  @media screen and (max-width: 1281px) {
    padding: 60px 60px 65px 60px;
  }
  @media screen and (max-width: 885px) {
    padding: 76px 98px 80px 80px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
const Img = styled.img`
  width: 172.5px;
  height: 133.5px;
`;
const Texts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: column;
`;
const T1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  color: #2063f9;
`;
const T2 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
export default function Card() {
  return (
    <div className="container">
      <Box>
        <Title>Лекарство</Title>
        <Cards>
          {Cardlist?.map((e) => {
            return (
              <Link key={e.id}>
                <Diiv>
                  <Img src={e.img}></Img>
                  <Texts>
                    <T1>{e.text1}</T1>
                    <T2>{e.text2}</T2>
                  </Texts>
                </Diiv>
              </Link>
            );
          })}
        </Cards>
      </Box>
    </div>
  );
}
