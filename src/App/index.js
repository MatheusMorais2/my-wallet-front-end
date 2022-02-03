import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../Contexts/userContext";

import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import MainPage from "../MainPage";

export default function App() {
  const [userData, setUserData] = useState({ name: "", token: "" });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
