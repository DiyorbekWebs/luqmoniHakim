import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  padding-bottom: 98px;
  background-color: #eeeeee;
`;
const Box = styled.div`
  padding: 52px 0px 108px 60px;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 41px;
`;
const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 53px;
  color: #000000;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
`;
const Paragrf = styled.p`
  width: 588px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
`;
const Bottom = styled.div`
  display: flex;
  gap: 95px;
`;
const Left = styled.div`
  display: flex;
  gap: 60px;
`;
const Right = styled.div`
  display: flex;
  gap: 93px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;
const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  opacity: 0.6;
  cursor: default;
`;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
const Div2 = styled.div`
  display: flex;
  gap: 20px;
`;
const Item2 = styled(Item)`
  cursor: pointer;
  color: #0047ff;
`;
const Item3 = styled(Item)`
  width: 264px;
`;
export default function Contact() {
  return (
    <Content>
      <div className="container">
        <Box>
          <Title>Наше контакты</Title>
          <Div>
            <Paragrf>
              ООО “Luqmoni Hakim” 2020. Reference site about Lorem Ipsum, giving
              information on its origins, as well as a random Lipsum generator.
            </Paragrf>
            <Bottom>
              <Left>
                <List>
                  <Span>Телефон</Span>
                  <Link>
                    <Item>+998 90 000-00-00</Item>
                  </Link>
                </List>
                <List>
                  <Span>Соц-сет</Span>
                  <Div2>
                    <Link>
                      <Item>Instagram</Item>
                    </Link>
                    <Link>
                      <Item>Facebook</Item>
                    </Link>
                    <Link>
                      <Item>Telegram</Item>
                    </Link>
                  </Div2>
                </List>
              </Left>
              <Right>
                <List>
                  <Span>Соц-сет</Span>
                  <Item2>info@gmail.com</Item2>
                </List>
                <List>
                  <Span>Адресс:</Span>
                  <Item3>Toshkent shahar, Mirzo Ulug’bek tumani 165 A uy</Item3>
                </List>
              </Right>
            </Bottom>
          </Div>
        </Box>
      </div>
    </Content>
  );
}
