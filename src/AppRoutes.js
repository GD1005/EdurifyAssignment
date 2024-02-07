import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./componant/Login.js";
import SignUp from "./componant/SignUp.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={App} />
        <Route path="/login" element={Login} />
        <Route path="/signup" element={SignUp} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
