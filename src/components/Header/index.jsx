import React from "react";
import styled from "styled-components";
import "./index.css";
import { Globe, Logo, ModalICon } from "../../assets/imgs";
import { ListInfor } from "../../constant/list";
import { Link } from "react-router-dom";
import { Language } from "../../constant/language";
const Headerr = styled.header`
  padding: 25px 0px;
  background-color: #eeeeee;
  @media screen and (max-width: 885px) {
    padding: 20px 0px;
  }
`;
const Nav = styled.nav`
  padding: 10px 10px 10px 26px;
  display: flex;
  background-color: #fff;
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
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
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #000000;
  width: 71px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 885px) {
    display: none;
  }
`;
const Item = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 54px;
  @media screen and (max-width: 885px) {
    gap: 10px;
  }
`;
const Lang = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const List2 = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const Item2 = styled.ul`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  color: #000000;
  opacity: 0.4;
`;
const TelNomer = styled(Link)`
  padding: 22px 28px;
  background: #0053ff;
  border-radius: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const ModalBtn = styled.div`
  display: none;
  @media screen and (max-width: 885px) {
    display: block;
    padding: 22px 32px;
    background: #121212;
    border-radius: 32px;
  }
`;
export default function Header() {
  const [langg, setLangg] = React.useState(1);

  return (
    <Headerr>
      <div className="container">
        <Nav>
          <Left>
            <Link to={'/'}>
              <LogoTip>
                <img src={Logo} alt="" />
                <LogoText>Luqmoni Hakim</LogoText>
              </LogoTip>
            </Link>
            <List>
              {ListInfor?.map((e) => (
                <Link key={e.id} to={e.path}>
                  <Item>{e.title}</Item>
                </Link>
              ))}
            </List>
          </Left>
          <Right>
            <Lang>
              <img src={Globe} alt="" />
              <List2>
                {Language?.map((e) => (
                  <Item2
                    key={e.id}
                    className={`${e.id === langg ? "actLang" : null}`}
                    onClick={() => setLangg(e.id)}
                  >
                    {e.lang}
                  </Item2>
                ))}
              </List2>
            </Lang>
            <TelNomer>+90 109 24 35</TelNomer>
            <ModalBtn>
              <img src={ModalICon} alt="" />
            </ModalBtn>
          </Right>
        </Nav>
      </div>
    </Headerr>
  );
}
