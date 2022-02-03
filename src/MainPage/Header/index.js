import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoExitOutline } from "react-icons/io5";
import UserContext from "../../Contexts/userContext";

export default function Header() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  function exit() {
    setUserData({ name: "", token: "" });
    navigate("/", { replace: true });
  }

  return (
    <Div>
      <Text>Olá, {userData.name}</Text>

      <Link to="/">
        <StyledIcon onClick={exit} />
      </Link>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  width: 100%;
`;

const Text = styled.div`
  font-family: "Raleway";
  font-size: 26px;
  font-weight: 700;
  color: #fff;
`;

const StyledIcon = styled(IoExitOutline)`
  color: #fff;
  font-size: 30px;
`;
