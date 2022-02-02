import { React, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "../../styles/Input";
import LoadingButton from "../../styles/LoadingButton";

export default function FormSignup() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  function signUp(e) {
    e.preventDefault();
    setLoading(true);

    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Senhas diferentes, tente novamente");
      setLoading(false);
      return;
    }

    const { email, name, password } = signUpData;
    const promise = axios.post("http://localhost:5000/signup", {
      email,
      name,
      password,
    });

    promise.then(() => {
      console.log("deu bom no signup");
    });

    promise.catch((error) => {
      console.log("erro ao cadastrar: ", error);
      alert("Falha ao cadastrar");
    });
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={signUp}>
        <Input
          placeholder="Nome"
          onChange={(e) =>
            setSignUpData({ ...signUpData, name: e.target.value })
          }
          value={signUpData.name}
          type="text"
          disabled={loading}
        />
        <Input
          placeholder="E-mail"
          onChange={(e) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }
          value={signUpData.email}
          type="email"
          disabled={loading}
        />

        <Input
          placeholder="Senha"
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
          value={signUpData.password}
          type="password"
          disabled={loading}
        />

        <Input
          placeholder="Confirme a senha"
          onChange={(e) =>
            setSignUpData({ ...signUpData, confirmPassword: e.target.value })
          }
          value={signUpData.confirmPassword}
          type="password"
          disabled={loading}
        />

        <Button type="submit" disabled={loading}>
          {loading ? <LoadingButton /> : "Cadastrar"}
        </Button>
      </form>
    </>
  );
}

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
  width: 100%;
`;
