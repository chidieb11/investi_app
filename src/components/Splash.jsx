import styled from "styled-components";
import React from "react";

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
      <Text>Investi</Text>
    </Container>
  );
};

export default splash;
