import { React, useContext, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import UserContext from "../../Contexts/userContext";

export default function Main() {
  const { userData } = useContext(UserContext);
  const [extract, setExtract] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promise = axios.get("http://localhost:5000/extract", config);

    promise.then((res) => {
      setExtract(res.data);
    });
  }, []);

  console.log("cu", extract);

  return (
    <Box>
      {extract.map((elem) => {
        <Transaction>
          Valor: {elem.value}, tipo: {elem.type}
        </Transaction>;
      })}
    </Box>
  );
}

const Box = styled.div`
  background-color: #fff;
  width: 100%;
  height: 66vh;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Transaction = styled.p`
  color: black;
`;
