import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BuyToken = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userAccount"));
  const onClick = () => {
    window.localStorage.removeItem("userAccount");
    navigate("/");
  };
  const { id } = useParams();
  return (
    <>
      <div className="app-wrapper">
        <h1>Buy Some Tokens...</h1>
        <h3>Wallet Adress:{id}</h3>
        <h3>Balance: {userData.balance}</h3>
        <div className="buttons">
          <button type="button">Buy Tokens</button>
          <button type="button" onClick={onClick}>
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyToken;
