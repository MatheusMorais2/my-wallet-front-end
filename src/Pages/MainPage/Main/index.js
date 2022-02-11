/* eslint-disable no-undef */
import { React, useContext, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../../../Contexts/userContext";

export default function Main() {
  const { userData } = useContext(UserContext);
  const [extract, setExtract] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promise = axios.get(process.env.REACT_APP_API + "/extract", config);

    promise.then((res) => {
      setExtract(res.data);

      let aux = 0;
      res.data.forEach((element) => {
        if (element.type === "deposit") aux += parseFloat(element.value);
        else aux -= parseFloat(element.value);
      });

      setBalance(aux);
    });
  }, []);

  return (
    <Box>
      <Transactions>
        {extract.map((elem) => {
          const random = Math.random();
          return (
            <Transaction key={elem.value + elem.type + elem.date + random}>
              <Aux>
                <Date>{elem.date}</Date>
                <Description>{elem.description}</Description>
              </Aux>

              <Value type={elem.type}>{elem.value}</Value>
            </Transaction>
          );
        })}
      </Transactions>
      <Balance>
        <B>SALDO</B> <Total balance={balance}>{balance}</Total>
      </Balance>
    </Box>
  );
}

const Box = styled.div`
  background-color: #fff;
  width: 100%;
  height: 66vh;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 23px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Transactions = styled.div``;

const Transaction = styled.div`
  font-family: "Raleway";
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Aux = styled.div``;

const Date = styled.span`
  color: #c6c6c6;
  margin-right: 5px;
`;

const Description = styled.span`
  color: #000;
`;

const Value = styled.span`
  color: ${(props) => (props.type === "deposit" ? "#03AC00" : "red")};
  text-align: right;
`;

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
`;

const B = styled.div`
  font-family: "Raleway";
  font-size: 17px;
  font-weight: 700;
  color: #000;
`;

const Total = styled.div`
  font-family: "Raleway";
  font-size: 17px;
  font-weight: 400;
  color: ${(props) => (props.balance >= 0 ? "#03AC00" : "red")};
`;
