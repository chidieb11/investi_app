import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import WalletImg from "../components/images/Wallet.png";

const Container = styled.div`
  height: 926px;
  width: 428px;
  border: 1px solid #ccc;
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
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecondWrapper = styled.div``;

const Updates = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 400px;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 40px auto;
  border-radius: 5px;
`;

const Background = styled.span`
  background: #f9f9f9;
  border-radius: 35%;
  width: 62px;
  height: 56px;
  margin-right: 20px;
`;

const EditProfile = styled.div`
  opacity: 0.6;
  margin-right: 200px;
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

const Title = styled.h3`
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  color: #585858;
  margin-bottom: 60px;
`;

const AddCash = () => {
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
      <Title>How would you love to fund your Investi wallet?</Title>
      {/* Second wrapper */}
      <SecondWrapper>
        <Updates>
          <Background>
            <Image src={WalletImg} />
          </Background>
          <EditProfile>
            <ProfileHeader>Fund wallet with card</ProfileHeader>
            <SubHeader>Fund your wallet with an ATM card</SubHeader>
          </EditProfile>
        </Updates>
        <Updates>
          <Background>
            <Image src={WalletImg} />
          </Background>
          <EditProfile>
            <ProfileHeader>Fund with Bank transfer</ProfileHeader>
            <SubHeader>Fund your wallet with an account no</SubHeader>
          </EditProfile>
        </Updates>
      </SecondWrapper>
    </Container>
  );
};

export default AddCash;
