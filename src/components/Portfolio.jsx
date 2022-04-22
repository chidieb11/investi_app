import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Img from "../components/images/chessBoard.png";

const Container = styled.div`
  height: 926px;
  width: 428px;
  border: 1px solid #ccc;
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
  margin: 10px;
`;

const Image = styled.img`
  width: 62px;
  height: 56px;
  margin-right: 10px;
  cursor: pointer;
`;

const ContentText = styled.div`
  margin-right: 60px;
`;

const TextHead = styled.h2`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.6;
`;

const TextChild = styled.p`
  font-size: 10px;
  font-weight: 400;
  opacity: 0.6;
`;

const Button = styled.button`
  background: #021346;
  color: whitesmoke;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const Portfolio = () => {
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
      {/* Second wrapper */}
      <SecondWrapper>
        <Image src={Img} />
        <ContentText>
          <TextHead>Apple</TextHead>
          <TextChild>Big Data Tech</TextChild>
        </ContentText>
        <Button>Invested $10,000</Button>
      </SecondWrapper>
    </Container>
  );
};

export default Portfolio;
