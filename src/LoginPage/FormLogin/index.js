import styled from "styled-components";
import { useState } from "react";
import React from "react";

export default function FormLogin() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  return (
    <Container>
      <Form>
        <Input
          placeholder="E-mail"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          value={loginData.email}
          type="email"
        />
        <Input
          placeholder="Senha"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          value={loginData.password}
          type="password"
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 58px;
`;

const Input = styled.input`
  height: 58px;
  background-color: #fff;
  border-radius: 5px;
  font-family: "Raleway";
  color: #000;
  font-size: 20px;
  font-weight: 400;
  padding: 0 15px;
  display: flex;
  align-items: center;
  margin-bottom: 13px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #a328d6;
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
`;
