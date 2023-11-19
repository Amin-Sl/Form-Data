import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { verifyOTP } from "./redux/action";
import "./verify.css";

const Verify = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    digit5: '',
  });
  const [OTP, setOTP] = useState({
    email: "",
    Numbers: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(verifyOTP(OTP));
  };

  const handleChange = (e) => {
    setOTP({
      ...OTP,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="verify">
      <h1 className="verify-Title">Verify OTP</h1>
      <form className="verify-form" onSubmit={handleSubmit}>
        <input
          className="emailOtp"
          type="email"
          name="email"
          value={verifyOTP.email}
          onChange={handleChange}
          placeholder="email"
        />
        <h1 className="verify-n">Enter number</h1>
        <div className="otp-input">
          <input
            onChange={handleChange}
            pattern="[0-9]"
            type="text"
            maxLength="1"
          />
          <input
            onChange={handleChange}
            pattern="[0-9]"
            type="text"
            maxLength="1"
          />
          <input
            onChange={handleChange}
            pattern="[0-9]"
            type="text"
            maxLength="1"
          />
          <input
            onChange={handleChange}
            pattern="[0-9]"
            type="text"
            maxLength="1"
          />
          <input
            onChange={handleChange}
            pattern="[0-9]"
            type="text"
            maxLength="1"
          />
        </div>
        <button className="verifyBtn" type="submit">
          Verify
        </button>
      </form>
    </div>
  );
};

export default Verify;
