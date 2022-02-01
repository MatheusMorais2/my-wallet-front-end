import React from "react";
import styled from "styled-components";

import Container from "../styles/Container";
import Logo from "../styles/Logo";
import FormSignup from "./FormSignup";

export default function SignupPage() {
  return (
    <Container>
      <Logo />
      <FormSignup />
      <Login>Já tem uma conta? Entre agora!</Login>
    </Container>
  );
}

const Login = styled.div`
  font-family: "Raleway";
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;
