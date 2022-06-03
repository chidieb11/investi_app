import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 926px;
  width: 428px;
  border: 1px solid #ccc;
  background: #021348;
`;

const Text = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100% auto;
  color: whitesmoke;
  font-size: 60px;
  font-weight: 600;
`;

const splash = () => {
  return (
    <Container>
      <Link to="/start" style={{ color: "#fff" }}>
        <Text>Investi</Text>
      </Link>
    </Container>
  );
};

export default splash;
