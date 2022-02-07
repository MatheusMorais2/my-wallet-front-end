import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../Contexts/userContext";

import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import MainPage from "../Pages/MainPage";
import TransactionPage from "../Pages/TransactionPage";

export default function App() {
  const [userData, setUserData] = useState({ name: "", token: "" });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/transaction" element={<TransactionPage />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
