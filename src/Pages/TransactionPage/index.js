import { React, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import UserContext from "../../Contexts/userContext";

import Input from "../../styles/Input";
import Container from "../../styles/Container";

export default function TransactionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    value: "",
    description: "",
    type: `${location.state.type}`,
  });
  const [loading, setLoading] = useState(false);
  const { userData } = useContext(UserContext);

  let type = "";
  if (location.state.type === "deposit") type = "entrada";
  else type = "saída";

  function submitTransaction(e) {
    e.preventDefault();
    setLoading(true);

    if (!transaction.value || !transaction.description) {
      alert("Alguma informacao esta faltando");
      setLoading(false);
      return;
    }

    const config = { Authorization: `Bearer ${userData.token}` };

    const promise = axios.post(
      "http://localhost:5000/extract",
      {
        ...transaction,
      },
      { headers: config }
    );

    promise.then(() => {
      setLoading(false);
      navigate("/main", { replace: true });
    });

    promise.catch((error) => {
      alert("Erro ao cadastrar transaçao");
      console.log(error);
      setLoading(false);
    });

    return;
  }

  return (
    <Container>
      <Title>Nova {type}</Title>
      <form onSubmit={submitTransaction}>
        <Input
          placeholder="Valor"
          onChange={(e) =>
            setTransaction({ ...transaction, value: e.target.value })
          }
          value={transaction.value}
          type="number"
          disabled={loading}
        />
        <Input
          placeholder="Descrição"
          onChange={(e) =>
            setTransaction({ ...transaction, description: e.target.value })
          }
          value={transaction.description}
          type="text"
          disabled={loading}
        />
        <Save type="submit">Salvar {type}</Save>
      </form>
    </Container>
  );
}

const Title = styled.p`
  font-family: "Raleway";
  font-size: 26px;
  font-weight: 700;
  height: 100px;
  padding: auto 0;
  color: #fff;
`;

const Save = styled.button`
  width: 100%;
  border-radius: 5px;
  background: #a328d6;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  height: 46px;
`;
