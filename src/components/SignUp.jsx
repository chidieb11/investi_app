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
  margin-top: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #b7b7b7;
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

const SignUp = () => {
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
        <HeaderOne>Sign-up with email and password</HeaderOne>
        <HeaderTwo>Note, your data is secure with us</HeaderTwo>
      </SecondWrapper>
      {/* Third wrapper */}
      <Form>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <InputContainer>
          <Text>
            By creating an account with pula space,{" "}
            <Empahsis>you agree to investi terms and condition</Empahsis>
          </Text>
          <Button>Continue</Button>
        </InputContainer>
      </Form>
    </Container>
  );
};

export default SignUp;
