import React from "react";
import styled from "styled-components";
import { Heart, Medicine, Share } from "../../assets/imgs";
import { Link } from "react-router-dom";
const Elem1 = styled.div`
  background: #ffffff;
  border-radius: 20px;
`;
const Top = styled.div`
  padding: 80px 80px 30px 80px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 33px;
  @media screen and (max-width: 885px) {
    padding: 50px 45px 30px 45px;
  }
  @media screen and (max-width: 835px) {
    padding: 40px 40px 30px 25px;
  }
  
`;
const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 53px;
  color: #000000;
`;
const Paragrf = styled.p`
  width: 713px;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
`;
const Img = styled.img`
  width: 714px;
  height: 429px;
`;
const Date = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  opacity: 0.4;
`;
const Day = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;
const Bottom = styled.div`
  padding: 30px 80px 52px 80px;
  border: 1px solid transparent;
  border-top-color: #0000003d;
  @media screen and (max-width: 885px) {
    padding: 30px 50px 30px 45px;
  }
  @media screen and (max-width: 835px) {
    padding: 30px 25px 30px 25px;
  }
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 34px;
`;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 12px;
`;
export default function PageI1() {
  return (
    <Elem1>
      <Top>
        <Title>Why do we use it?</Title>
        <Paragrf>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
          <br />
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.
        </Paragrf>
        <Img src={Medicine} alt="" />
        <Paragrf>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
          <br />
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy.
        </Paragrf>
        <Date>
          <Span>Дата публикации:</Span>
          <Day>1 Апрель 2023</Day>
        </Date>
      </Top>
      <Bottom>
        <List>
          <Link>
            <Item>
              <img src={Heart} alt="" />
              Нравится
            </Item>
          </Link>
          <Link>
            <Item>
              <img src={Share} alt="" />
              Поделится
            </Item>
          </Link>
        </List>
      </Bottom>
    </Elem1>
  );
}
