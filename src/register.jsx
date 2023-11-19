// pages/register.js
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { registerUser } from "./redux/action";
import { useNavigate } from "react-router-dom";
import "./register.css"
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    navigate("/verify");
  };
  return (
    <div className="register">
      <h1 className="regTitle">Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="userName"
        />
        <br />
        <input className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <input className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
        />
        <br />
        <button className="btn" onClick={handleClick} type="submit">
         sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
