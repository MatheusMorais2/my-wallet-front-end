import styled from "styled-components";
import { useState } from "react";
import React from "react";
import axios from "axios";

import Input from "../../styles/Input";
import LoadingButton from "../../styles/LoadingButton";

export default function FormLogin() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function login(e) {
    e.preventDefault();
    setLoading(true);

    const { email, password } = loginData;
    if (!email || !password) {
      alert("Alguma informacao esta faltando");
      setLoading(false);
      return;
    }
    console.log(loginData);
    const promise = axios.post("http://localhost:5000/login", {
      email,
      password,
    });

    promise.then(() => {
      console.log("deu bom no login");
    });

    promise.catch(() => {
      alert("Email e/ou senha invalidos");
      setLoginData({ email: "", password: "" });
    });
    setLoading(false);
  }

  return (
    <Container>
      <Form onSubmit={login}>
        <Input
          placeholder="E-mail"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          value={loginData.email}
          type="email"
          disabled={loading}
        />
        <Input
          placeholder="Senha"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          value={loginData.password}
          type="password"
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          {loading ? <LoadingButton /> : "Entrar"}
        </Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
  color: #fff;
  height: 46px;
`;
