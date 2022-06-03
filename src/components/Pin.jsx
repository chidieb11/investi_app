import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

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

const Text = styled.h3``;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 80px;
`;

const Input = styled.input`
  width: 54px;
  height: 55px;
  margin-left: 5px;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  border: 1px solid #92b1c6;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 30vw;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: #001240;
  color: whitesmoke;
  cursor: pointer;
`;

const PinButtons = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Buttons = styled.button`
  width: 5vw;
  font-weight: 600;
  height: 10vh;
  border-radius: 50%;
  margin-left: 20px;
  outline: none;
  cursor: pointer;
  border: none;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Pin = () => {
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
        <Text>Set your 4 digit pin</Text>
      </SecondWrapper>
      {/* Fouth wrapper */}
      <Form>
        <Boxes>
          <Input />
          <Input />
          <Input />
          <Input />
        </Boxes>

        {/* Third wrapper */}
        <PinButtons>
          <Buttons>1</Buttons>
          <Buttons>2</Buttons>
          <Buttons>3</Buttons>
        </PinButtons>
        <PinButtons>
          <Buttons>4</Buttons>
          <Buttons>5</Buttons>
          <Buttons>6</Buttons>
        </PinButtons>
        <PinButtons>
          <Buttons>7</Buttons>
          <Buttons>8</Buttons>
          <Buttons>9</Buttons>
        </PinButtons>
        <PinButtons>
          <Buttons>X</Buttons>
          <Buttons>0</Buttons>
          <Buttons></Buttons>
        </PinButtons>
        <Link to="/successful">
          <Button>Continue</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default Pin;
