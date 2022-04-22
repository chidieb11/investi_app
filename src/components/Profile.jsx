import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Img from "../components/images/chessBoard.png";
import UserImg from "../components/images/AddUser.png";
import DocImg from "../components/images/Document.png";
import WalletImg from "../components/images/Wallet.png";
import DownloadImg from "../components/images/Download.png";

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

const SecondWrapper = styled.div`
  text-align: center;
`;

const HeaderOne = styled.h3`
  font-weight: 600;
  margin-bottom: 5px;
  color: #001240;
`;

const HeaderBtn = styled.button`
  padding: 5px;
  margin-top: 10px;
  border: none;
  color: #3a6ff3;
  cursor: pointer;
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
  border-radius: 35%;
  width: 62px;
  height: 56px;
`;

const EditProfile = styled.div`
  opacity: 0.6;
  margin-right: 200px;
  cursor: pointer;
`;

const ProfileHeader = styled.h3`
  font-size: 15px;
  font-weight: 400;
`;

const SubHeader = styled.p`
  font-size: 10px;
`;

const Footer = styled.h5`
  text-align: center;
  margin-top: 20px;
  opacity: 0.6;
`;

const Profile = () => {
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
      {/* Second wrapper */}
      <SecondWrapper>
        <HeaderOne>Iyke Iyke</HeaderOne>
        <HeaderBtn>Edit Profile</HeaderBtn>
      </SecondWrapper>
      {/* Third wrapper */}
      <ThirdWrapper>
        <Updates>
          <Background>
            <Image src={UserImg} />
          </Background>
          <EditProfile>
            <ProfileHeader>Edit Profile</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
        </Updates>
        <Updates>
          <Background>
            <Image src={DocImg} />
          </Background>
          <EditProfile>
            <ProfileHeader>Upload Doc</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
        </Updates>
        <Updates>
          <Background>
            <Image src={WalletImg} />
          </Background>
          <EditProfile>
            <ProfileHeader>Link Bank</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
        </Updates>
        <Updates>
          <Background>
            <Image src={DownloadImg} />
          </Background>
          <EditProfile>
            <ProfileHeader>Logout</ProfileHeader>
            <SubHeader>Fintech Startup</SubHeader>
          </EditProfile>
        </Updates>
        <Footer>Investi 1.0.0</Footer>
      </ThirdWrapper>
    </Container>
  );
};

export default Profile;
