import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Img from "../components/images/Filter.png";

const Container = styled.div`
  height: 926px;
  width: 428px;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  font-size: 15px;
`;

const Image = styled.img`
  padding: 20px;
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
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 400px;
  height: 100px;
  border-bottom: 1px dashed #e9e9ed;
`;

const Background = styled.span`
  background: #f9f9f9;
  margin-right: -50px;
  border-radius: 15%;
  width: 62px;
  height: 56px;
`;

const EditProfile = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.6;
  margin-left: -80px;
  cursor: pointer;
`;

const ProfileHeader = styled.h3`
  font-size: 15px;
  font-weight: 400;
`;

const SubHeader = styled.p`
  font-size: 10px;
`;

const Button = styled.button`
  padding: 5px 15px 5px 15px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #02144a;
  color: whitesmoke;
`;

const Explore = () => {
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
      {/* Third wrapper */}
      <ThirdWrapper>
        <Updates>
          <Background></Background>
          <EditProfile>
            <ProfileHeader>Flutterwave</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
          <Button>Invest</Button>
        </Updates>
        <Updates>
          <Background></Background>
          <EditProfile>
            <ProfileHeader>Paystack</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
          <Button>Invest</Button>
        </Updates>
        <Updates>
          <Background></Background>
          <EditProfile>
            <ProfileHeader>Alibaba</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
          <Button>Invest</Button>
        </Updates>
        <Updates>
          <Background></Background>
          <EditProfile>
            <ProfileHeader>Uber</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
          <Button>Invest</Button>
        </Updates>
        <Updates>
          <Background></Background>
          <EditProfile>
            <ProfileHeader>Toptal</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
          <Button>Invest</Button>
        </Updates>
        <Updates>
          <Background></Background>
          <EditProfile>
            <ProfileHeader>Ping Inc</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
          <Button>Invest</Button>
        </Updates>
      </ThirdWrapper>
    </Container>
  );
};

export default Explore;
