import styled from "styled-components";
import React from "react";
import NetworkCellIcon from "@material-ui/icons/NetworkCell";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging50OutlinedIcon from "@material-ui/icons/BatteryCharging50Outlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 80%;
  padding: 20px;
  /* opacity: 0.6; */
  margin-top: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #b7b7b7;
`;

const InputText = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #001240;
  margin-top: 40px;
`;

const InputContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 70%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: #001240;
  color: whitesmoke;
  cursor: pointer;
  margin-top: 80px;
`;

const Empahsis = styled.span`
  font-weight: bold;
`;

const Text = styled.h5`
  opacity: 0.8;
  text-align: center;
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;

const Location = () => {
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
        <HeaderOne>Input verification code</HeaderOne>
        <HeaderTwo>We sent an email to you@gmail.com</HeaderTwo>
      </SecondWrapper>
      {/* Third wrapper */}
      <Form>
        <Input placeholder="Input verification code" />
        <InputText>Resend</InputText>
        <Button>Continue</Button>
      </Form>
    </Container>
  );
};

export default Location;
