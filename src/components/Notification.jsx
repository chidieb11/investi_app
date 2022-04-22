import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Img from "../components/images/Filter.png";
import MessageImg from "../components/images/Message.png";

const Container = styled.div`
  height: 926px;
  width: 428px;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  font-size: 15px;
`;

const Image = styled.img`
  padding: 13px 13px 13px 13px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThirdWrapper = styled.div``;

const Updates = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 400px;
  height: 100px;
  border-bottom: 1px dashed #e9e9ed;
`;

const Background = styled.span`
  background: #f9f9f9;
  border-radius: 15%;
  width: 62px;
  height: 56px;
`;

const EditProfile = styled.div`
  opacity: 0.6;
  margin-left: 20px;
  cursor: pointer;
  white-space: nowrap;
`;

const ProfileHeader = styled.h3`
  font-size: 15px;
  font-weight: 400;
`;

const SubHeader = styled.p`
  font-size: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btns = styled.div`
  background: #f9f9f9;
  padding: 10px;
`;

const FirstBtn = styled.button`
  margin: 5px;
  padding: 5px 15px 5px 15px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #001240;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;

const SecondBtn = styled.button`
  margin: 5px;
  padding: 5px 15px 5px 15px;
  width: 100px;
  height: 30px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  color: #001240;
  cursor: pointer;
`;

const ThirdBtn = styled.button`
  margin: 5px;
  padding: 5px 15px 5px 15px;
  width: 100px;
  height: 30px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  color: #001240;
  cursor: pointer;
`;

const Notification = () => {
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
          <Title>Explore Stocks</Title>
          <Image src={Img} />
        </Second>
      </FirstWrapper>
      {/* Second wrapper */}
      <Buttons>
        <Btns>
          <FirstBtn>all</FirstBtn>
          <SecondBtn>History</SecondBtn>
          <ThirdBtn>Pending</ThirdBtn>
        </Btns>
      </Buttons>
      {/* Third wrapper */}
      <ThirdWrapper>
        <Updates>
          <Background>
            <Image src={MessageImg} />
          </Background>
          <EditProfile>
            <ProfileHeader>Your investment portfolio</ProfileHeader>
            <SubHeader>View your investment portfolio</SubHeader>
          </EditProfile>
        </Updates>
        <Updates>
          <Background>
            <Image src={MessageImg} />
          </Background>
          <EditProfile>
            <ProfileHeader>Ping Inc sent a vote of thanks</ProfileHeader>
            <SubHeader>View to see notification from ping</SubHeader>
          </EditProfile>
        </Updates>
      </ThirdWrapper>
    </Container>
  );
};

export default Notification;
