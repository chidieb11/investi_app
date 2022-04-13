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

const Select = styled.select`
  width: 80%;
  padding: 20px;
  opacity: 0.6;
  margin-top: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #b7b7b7;
  background: #fff;
`;

const Option = styled.option``;

const Input = styled.input`
  width: 80%;
  padding: 20px;
  /* opacity: 0.6; */
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
        <HeaderOne>Input your location</HeaderOne>
        <HeaderTwo>
          Please we recommend you input your current location
        </HeaderTwo>
      </SecondWrapper>
      {/* Third wrapper */}
      <Form>
        <Select>
          <Option>Select Country</Option>
          <Option>Nigeria</Option>
          <Option>USA</Option>
          <Option>UK</Option>
          <Option>Canada</Option>
        </Select>
        <Select>
          <Option>Select State</Option>
          <Option>Lagos</Option>
          <Option>Abuja</Option>
          <Option>Enugu</Option>
          <Option>Ebonyi</Option>
          <Option>Anambra</Option>
        </Select>
        <Input placeholder="Input City" />
        <Button>Continue</Button>
      </Form>
    </Container>
  );
};

export default Location;
