import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Camera from "../components/images/CameraTwo.png";

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
  text-align: center;
`;

const HeaderOne = styled.h3``;

const HeaderTwo = styled.h5`
  opacity: 0.6;
  font-size: 10px;
`;

const Button = styled.button`
  width: 70%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: #001240;
  color: whitesmoke;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

const ParentCover = styled.div`
  padding: 60px;
`;

const Cover = styled.div`
  border: 1px solid #001240;
  border-radius: 10px;
  padding: 10px;
  opacity: 0.5;
`;

const ThirdWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
  padding: 5px;
`;

const RadioButton = styled.input`
  margin-right: 10px;
  outline: none;
`;

const Text = styled.p`
  font-size: 10px;
`;

const FouthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

const MainWrapper = styled.div`
  margin-right: 10px;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 400;
`;

const CameraWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 40px;
  border-radius: 10px;
`;

const Image = styled.img``;

const EditProfiile = () => {
  return (
    <Container>
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
        <HeaderOne>Upload Document</HeaderOne>
        <HeaderTwo>You are able to edit your pofile details</HeaderTwo>
      </SecondWrapper>
      {/* Third wrapper */}
      <ParentCover>
        <Cover>
          <ThirdWrapper>
            <RadioButton name="radio" type="radio" />
            <Text>NIN</Text>
          </ThirdWrapper>
          <ThirdWrapper>
            <RadioButton name="radio" type="radio" />
            <Text>Drivers License</Text>
          </ThirdWrapper>
          <ThirdWrapper>
            <RadioButton name="radio" type="radio" />
            <Text>Passport</Text>
          </ThirdWrapper>
        </Cover>
      </ParentCover>
      {/* Fouth wrapper */}
      <FouthWrapper>
        <MainWrapper>
          <Title>Front</Title>
          <CameraWrapper>
            <Image src={Camera} />
          </CameraWrapper>
        </MainWrapper>
        <MainWrapper>
          <Title>Back</Title>
          <CameraWrapper>
            <Image src={Camera} />
          </CameraWrapper>
        </MainWrapper>
      </FouthWrapper>
      <Button>Continue</Button>
    </Container>
  );
};

export default EditProfiile;
