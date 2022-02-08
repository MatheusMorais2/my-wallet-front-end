import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../styles/Container";
import Logo from "../../styles/Logo";
import FormSignup from "./FormSignup";

export default function SignupPage() {
  return (
    <Container>
      <Logo />
      <FormSignup />
      <Link to="/">
        <Login>Já tem uma conta? Entre agora!</Login>
      </Link>
    </Container>
  );
}

const Login = styled.div`
  font-family: "Raleway";
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;
