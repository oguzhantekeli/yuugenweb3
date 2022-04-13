import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BuyToken from "./pages/BuyToken";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buytoken/:id" element={<BuyToken />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <div></div>
      </Router>
    </>
  );
};

export default App;
