import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

import FormLogin from "./FormLogin";
import Container from "../../styles/Container";
import Logo from "../../styles/Logo";

export default function LoginPage() {
  return (
    <Container>
      <Logo />
      <FormLogin />
      <Link to="/signup">
        <SignUp>Primeira vez? Cadastre-se!</SignUp>
      </Link>
    </Container>
  );
}

const SignUp = styled.div`
  font-family: "Raleway";
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;
