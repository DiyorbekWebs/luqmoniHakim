import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./index.css";
import PageI1 from "./PageI1";
import Card2 from "../../components/Hero/Card2";
import Card1 from "../../components/Hero/Card1";
const Box = styled.div`
  padding: 25px 25px 80px 25px;
  background-color: #eee;
  @media screen and (max-width: 835px) {
    padding: 20px 20px 70px 20px;
  }
`;
const Div = styled.div`
  background-color: #eee;
`;
const Tablist = styled(TabList)`
  width: 300px;
  height: 398px;
  padding: 50px 0px 0px 55px;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 20px;
  background-color: #fff;
  @media screen and (max-width: 885px) {
    padding: 30px 0px 55px 50px;
    flex-direction: row;
    width: 100%;
    height: 45px;
    gap: 50px;
  }
`;
const Tabb = styled(Tab)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  cursor: pointer;
  transition: 1s;
`;
const Tabss = styled(Tabs)`
  display: flex;
  gap: 28px;
  @media screen and (max-width: 885px) {
    flex-direction: column;
  }
`;
const Bottom = styled.div`
  padding: 72px 0px 74px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: row-reverse;
`;
export default function About() {
  return (
    <>
      <Div>
        <div className="container">
          <Box>
            <Tabss>
              <Tablist>
                <Tabb>Услуги</Tabb>
                <Tabb>Лекарство</Tabb>
                <Tabb>О нас</Tabb>
              </Tablist>

              <TabPanel>
                <PageI1 />
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabss>
          </Box>
        </div>
      </Div>
      <div className="container">
        <Bottom>
          <Card2 />
          <Card1 />
        </Bottom>
      </div>
    </>
  );
}
