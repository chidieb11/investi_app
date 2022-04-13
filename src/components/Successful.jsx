import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Img from "../components/images/Nike.png";

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

const ImageFirstWrapper = styled.div`
  background: #bdcbee;
  border-radius: 50%;
  padding: 15px;
`;

const ImageWrapper = styled.div`
  background: #001240;
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

const Image = styled.img`
  width: 9vw;
  padding: 30px 20px 30px 20px;
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

const HeaderTwo = styled.h5`
  opacity: 0.6;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const Button = styled.button`
  width: 70%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: #001240;
  color: whitesmoke;
  cursor: pointer;
`;

const Successful = () => {
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
        <ImageFirstWrapper>
          <ImageWrapper>
            <Image src={Img}></Image>
          </ImageWrapper>
        </ImageFirstWrapper>
      </Wrapper>
      {/* Second wrapper */}
      <SecondWrapper>
        <HeaderOne>Successfully created an account</HeaderOne>
        <HeaderTwo>
          Hello Iyke, thanks for creating an account with us
        </HeaderTwo>
      </SecondWrapper>
      {/* Third wrapper */}
      <Form>
        <Button>Done</Button>
      </Form>
    </Container>
  );
};

export default Successful;
