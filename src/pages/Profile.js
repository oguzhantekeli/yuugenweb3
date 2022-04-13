import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Web3 from "web3";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userAccount"));
  const [userName, setUserName] = useState("");
  const onClick = () => {
    window.localStorage.removeItem("userAccount");
    navigate("/");
  };
  const web3 = new Web3(window.ethereum);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = { userName: userName, address: id };
    console.log(formData);

    // web3.eth.personal.sign(web3.utils.sha3(userName), id);//hashed version here
    web3.eth.personal.sign(userName, id);
  };

  return (
    <>
      <div className="app-wrapper">
        <h1>Profile Page</h1>
        <h3>Wallet Adress: {id}</h3>
        <form onSubmit={(e) => onSubmit(e)} className="profile-form">
          <div className="form-grupo">
            <label>Wallet Adress: </label>
            <input type="text" value={id} disabled />
          </div>
          <div className="form-grupo">
            <label>User Name: </label>
            <input
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              placeholder="Enter user name"
              type="text"
            />
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClick}>
              Home
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
