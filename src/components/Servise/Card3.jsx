import React from "react";
import styled from "styled-components";
import { Arrow, Comment } from "../../assets/imgs";
import "./index.css";
import { Link } from "react-router-dom";
const Card = styled.div`
  padding: 71px 81px 71px 58px;
  display: flex;
  flex-direction: column;
  gap: 84px;
  position: relative;
  align-items: flex-start;
  cursor: default;
  border-radius: 32px;
  @media screen and (max-width: 1281px) {
    padding: 70px 75px 33px 45px;
    gap: 50px;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Btn = styled.button`
  width: 71px;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff23;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;
const Text = styled.h4`
  width: 172px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
`;
export default function Card3() {
  return (
    <Card className="card">
      <Top>
        <Img src={Comment} alt="" />
        <Text>Хотите получить консултацию</Text>
      </Top>
      <Link>
        <Btn>
          <img src={Arrow} alt="" />
        </Btn>
      </Link>
    </Card>
  );
}
