import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Img from "../components/images/chessBoard.png";
import GraphImg from "../components/images/graph.png";

const Container = styled.div`
  height: 926px;
  width: 428px;
  border: 1px solid #ccc;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const Image = styled.img`
  padding: 5px;
`;

const FirstWrapper = styled.div`
  background-color: #fff;
  color: #000;
  padding: 40px;
  opacity: 0.8;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Time = styled.span``;

const HeaderItems = styled.div``;

const Second = styled.div`
  margin-top: 20px;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecondWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Buttons = styled.div``;

const FirstBtn = styled.button`
  margin: 10px;
  padding: 10px;
  background: none;
  outline: 1px solid #0ec055;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  color: #0ec055;
  cursor: pointer;
`;

const SecondBtn = styled.button`
  padding: 10px;
  background: none;
  outline: 1px solid #ee0e1c;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  color: #ee0e1c;
  cursor: pointer;
`;

const Graph = styled.div``;

// const GraphImage = styled.img``;

const Company = () => {
  return (
    <Container>
      {/* First wrapper */}
      <FirstWrapper>
        <Header>
          <Time>19:41</Time>
          <HeaderItems>
            <NetworkCellIcon />
            <WifiIcon />
            <BatteryCharging50OutlinedIcon />
          </HeaderItems>
        </Header>
        <Second>
          <ArrowBackIcon />
        </Second>
      </FirstWrapper>
      {/* Wrapper */}
      <Wrapper>
        <Image src={Img} />
      </Wrapper>
      {/* SecondWrapper */}
      <SecondWrapper>
        <Buttons>
          <FirstBtn>Buy Stock</FirstBtn>
          <SecondBtn>Sell Stock</SecondBtn>
        </Buttons>
        <Graph>
          <Image src={GraphImg} />
        </Graph>
      </SecondWrapper>
    </Container>
  );
};

export default Company;
