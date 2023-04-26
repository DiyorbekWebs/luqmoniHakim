import React from "react";
import styled from "styled-components";
import {  Logo2 } from "../../assets/imgs";
import { ListInfor } from "../../constant/list";
import { Link } from "react-router-dom";
const Box = styled.div`
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding-bottom: 25px;
`;
const LogoTip = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LogoText = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: -0.02em;
  color: #000000;
  width: 71px;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  color: #000000;
`;
const Tel = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  text-align: right;
  color: #000000;
`;
const Bottom = styled.div`
  padding: 26px 0px 34px 0px;
  background: #eeeeee;
`;
const H1 = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;
  color: #000000;
`;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export default function Footer() {
  return (
    <>
      <div className="container">
        <Box>
          <Top>
            <LogoTip>
              <img src={Logo2} alt="" />
              <LogoText>Luqmoni Hakim</LogoText>
            </LogoTip>
            <Nav>
              <List>
                {ListInfor?.map((e) => (
                  <Link key={e.id}>
                    <Item>{e.title}</Item>
                  </Link>
                ))}
              </List>
              <Link to={"tel:+998 90 100-00-00"}>
                <Tel>+998 90 100-00-00</Tel>
              </Link>
            </Nav>
          </Top>
        </Box>
      </div>
      <Bottom>
        <div className="container">
          <Box2>
            <H1>Связаться с нами </H1>
            <Nav>
              <List>
                <Link>
                  <Item>biotechart@gmail.com</Item>
                </Link>
                <Link>
                  <Item>+998 (90) 109 24 35</Item>
                </Link>
                <Link>
                  <Item>634034, Ташкент, ул Нахимовна 8/2</Item>
                </Link>
              </List>
              <Item>634034, Ташкент, ул Нахимовна 8/2</Item>
            </Nav>
          </Box2>
        </div>
      </Bottom>
    </>
  );
}
