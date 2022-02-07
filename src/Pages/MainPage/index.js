import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import Container from "../../styles/Container";
import Header from "./Header";
import Main from "./Main";

export default function MainPage() {
  return (
    <Container>
      <Header />
      <Main />
      <Buttons>
        <Link to="/transaction" state={{ type: "deposit" }}>
          <Button>
            <StyledPlus />
            Nova
            <br /> entrada
          </Button>
        </Link>
        <Link to="/transaction" state={{ type: "withdraw" }}>
          <Button>
            <StyledMinus />
            Nova
            <br /> saída
          </Button>
        </Link>
      </Buttons>
    </Container>
  );
}

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const Button = styled.div`
  background: #a328d6;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px;
  height: 17vh;
  width: 40vw;
  font-family: "Raleway";
  font-size: 17px;
  font-weight: 700;
`;

const StyledPlus = styled(AiOutlinePlusCircle)`
  color: #fff;
  font-size: 30px;
`;

const StyledMinus = styled(AiOutlineMinusCircle)`
  color: #fff;
  font-size: 30px;
`;
