import styled from "styled-components";
/* import { Link } from "react-router-dom"; */
import React from "react";

import FormLogin from "./FormLogin";

export default function LoginPage() {
  return (
    <Container>
      <Logo>MyWallet</Logo>
      <FormLogin />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const Logo = styled.div`
  color: #fff;
  font-family: "Saira Stencil One";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  margin-bottom: 24px;
`;
