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

const Button = styled.button`
  margin-top: 60px;
  width: 30vw;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: #001240;
  color: whitesmoke;
  cursor: pointer;
`;

const Text = styled.h5`
  margin-top: 15px;
  opacity: 0.8;
`;

const SignIn = () => {
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
        <HeaderOne>Sign-in with email and password</HeaderOne>
        <HeaderTwo>Note, your data is secure with us</HeaderTwo>
      </SecondWrapper>
      {/* Third wrapper */}
      <Form>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Link to="/home">
          <Button>Continue</Button>
        </Link>
        <Link
          to="/resetpassword"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Text>Forgot password</Text>
        </Link>
      </Form>
    </Container>
  );
};

export default SignIn;
